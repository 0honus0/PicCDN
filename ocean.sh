IP=TEMP_IP
START=TEMP_START
END=TEMP_END

mkdir -p /root/ocean/typesense

cd /root/ocean/typesense && wget -O docker-compose.yml "https://raw.githubusercontent.com/0honus0/PicCDN/master/docker-compose-typesense.yml" && docker-compose up -d
cd /root/ocean && wget -O docker-compose.yml "https://raw.githubusercontent.com/0honus0/PicCDN/master/docker-compose-ocean.yml"

for i in $(seq "$START" "$END")
do
  mkdir -p /root/ocean/node$i

  cd /root/ocean/node$i && cp ../docker-compose.yml .

  sed -i "s/M_INDEX/$i/g" ./docker-compose.yml
  sed -i "s/M_PORT1/$((10000 + $i))/g" ./docker-compose.yml
  sed -i "s/M_PORT2/$((11000 + $i))/g" ./docker-compose.yml
  sed -i "s/M_PORT3/$((12000 + $i))/g" ./docker-compose.yml
  sed -i "s/M_PORT4/$((13000 + $i))/g" ./docker-compose.yml
  sed -i "s/M_PORT5/$((14000 + $i))/g" ./docker-compose.yml
  sed -i "s/M_IP/$IP/g" ./docker-compose.yml

  PRIVATE_KEY=$(head -c 32 /dev/urandom | xxd -p | tr -d '\n' | awk '{print "0x" $0}')
  sed -i "s/M_PRIVATE_KEY/$PRIVATE_KEY/g" ./docker-compose.yml

  docker-compose down
  docker-compose up -d
done




