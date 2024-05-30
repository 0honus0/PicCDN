#!/bin/bash

start_process() {
    version=$(cat config/version.go | grep -A 1 "func GetVersion() \[\]byte {" | grep -Eo '0x[0-9a-fA-F]+' | xargs printf "%d.%d.%d")
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        if [[ $arch == arm* ]]; then
            ./node-$version-linux-arm64 &
            main_process_id=$!
        else
            ./node-$version-linux-amd64 &
            main_process_id=$!
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        ./node-$version-darwin-arm64 &
        main_process_id=$!
    else
        echo "unsupported OS for releases, please build from source"
        exit 1
    fi

    echo "process started with PID $main_process_id"
}

is_process_running() {
    ps -p $main_process_id > /dev/null 2>&1
    return $?
}

start_process

while true; do
    if ! is_process_running; then
        echo "process crashed or stopped. restarting..."
        start_process
    fi

    sleep 60
done
