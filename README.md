# FDUG Docker Presentation

Presentation Structure:

- Intro (What is Docker - < 5 min) [use Docker slides?]
- Problem - Solution Approach

## Run Unix-native software in non-Unix (John)
  - **Normally have to**
    - either use a community run fork of the project
      - may or may not be abandon-ware;
      - have subtle differences from "real" version,
      - may be buggy or slow,
      - may not have all the features you are looking for or have in prod.
      - NOT THE SAME AS PROD (dangerous!)
    - setup virtual environments to host the native copy
      - non-portable; can copy disk image but they are quite large for a single program
      - time consuming; downloading a disk image takes time; setting of VirtualBox takes time
        - install VirtualBox
        - download Linux OS
        - install Linux OS,
        - setup Virutal Box for network / file sharing,
        - install redis through package manager (apt-get ET AL)
        - have to repeat this on every machine you want to develop on!
  - **Docker simplifies this:**
    - install Docker,
    - install the image (basic commands),
    - run the image;
    - good to go!
  - **Advantages**
    - Running "real" and "latest" version of production software in Windows
    - No management of virtual environments; you are running close to the baremetal
      of your machine; its faster then running through Virtual Machine;
    - CAVEAT: Windows 10 Home only supports Docker through VirtualBox; still
      vastly simplifies the process; (no direct management of VirtualBox)
      - Win10 Home -> docker-machine
      - HyperV otherwise
    - Ability to share files into container
    - Tiny footprint (docker images are miniscuile)

## Many versions of same software service on same machine (John)
  - **Traditionally have to either:**
    - alias instances (redis32, redis31, etc); ensuring that configs dont conflict
      - huge headaches
    - create Virtual environments
      - same issues as before
    - just hope that it wont matter in prod; using only a single instance
      - dangerous! also some features may not be available


## Different software services have dependency on different versions of
  same software package. (DLL hell)
  - eg. You run Redis instance with your Lua app, but version of Lua required
    by Redis is different than your version.

## Use of pre-configured machine images
  - Leverage the knowledge of specialists to configure services
  - Avoid having to learn about config parms

## Layered images
  - common configs can be factored out into simpler Docker images
  - eg. Use common org-wide image for SSH access

## Differences between dev and prod
  - Image that is tested is exactly bit-wise identical to production image
  - No differences in software versions (yours or dependencies)
  - Identical directory layout
  - No missing config

## Multi-container architectures - need more than Docker
  - Need orchestration solution (eg. Docker Swarm, AWS EC2 Container Service,
    Kubernetes, Joyent)
  - ...
  - Demo!

## Debugging exactly what's in production (John)
  - Use same Docker image as prod to reproduce problem
  - Copy prod data via Docker volumes and 'docker commit' to local dev
    environment for debugging.
  - Demo!

- 9.
