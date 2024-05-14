apt update && apt -y install jq
wget https://golang.org/dl/go1.20.11.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.20.11.linux-amd64.tar.gz
rm -rf go1.20.11.linux-amd64.tar.gz
echo ' export PATH=$PATH:/usr/local/go/bin:~/go/bin' >> ~/.bashrc
source ~/.bashrc
git clone https://github.com/QuilibriumNetwork/ceremonyclient
cd ceremonyclient/node
chmod +x poor_mans_cd.sh
screen -dmS quli bash -c './poor_mans_cd.sh; exec bash'
