## cleanup dead docker
```base
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
```

## docker issues
+ 1.input/output error
should restart the docker