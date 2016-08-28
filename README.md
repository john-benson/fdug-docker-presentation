# FDUG Docker Presentation

Presentation Structure:

- Intro (What is Docker - < 5 min) [use Docker slides?]
- Problem - Solution Approach

- 1. Run Unix-native software in non-Unix (John)
  - Simplify the ramp up
    - install Docker, install the image (basic commands), good to go
    - vs; install VirtualBox, download Linux OS, install Linux OS, setup
      Network Adapter, install redis through package manager
  - Advantages
    - Running the same OS / Redis combo across multiple environments

  - eg. Run Redis-for-Linux on Windows machine
  - Use native virtualization technology of your machine
    (Mac/Windows/Linux/BSD) without configuration. Docker manages
    virtualization env.

- 2. Many versions of same software service on same machine
  - eg. Run MySQL 5.7 and MySQL 5.3 on dev machine.
  - eg. Can "scale up" on same machine (dev machine, for eg.)

- 3. Different software services have dependency on different versions of
  same software package. (DLL hell)
  - eg. You run Redis instance with your Lua app, but version of Lua required
    by Redis is different than your version.

- 4. Use of pre-configured machine images
  - Leverage the knowledge of specialists to configure services
  - Avoid having to learn about config parms

- 5. Layered images
  - common configs can be factored out into simpler Docker images
  - eg. Use common org-wide image for SSH access

- 6. Differences between dev and prod
  - Image that is tested is exactly bit-wise identical to production image
  - No differences in software versions (yours or dependencies)
  - Identical directory layout
  - No missing config

- 7. Multi-container architectures - need more than Docker
  - Need orchestration solution (eg. Docker Swarm, AWS EC2 Container Service,
    Kubernetes, Joyent)
  - ...
  - Demo!

- 8. Debugging exactly what's in production (John)
  - Use same Docker image as prod to reproduce problem
  - Copy prod data via Docker volumes and 'docker commit' to local dev
    environment for debugging.
  - Demo!

- 9.
