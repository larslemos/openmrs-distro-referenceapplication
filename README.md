Packages a distribution of configs, metadata and binaries to run O3 Distro High availability

Run OHRI Distro in Swarm Cluster

docker stack deploy ohri-distro-stack --compose-file docker-compose.stack.yml

Run OHRI Distro

docker compose -f docker-compose.stack.yml up

Run Visualizer

docker run -it -p 8080:8080 -v /var/run/docker.sock:/var/run/docker/sock larslemos/visualizer
