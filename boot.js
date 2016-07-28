var onix = {};
onix.initial = "Onix-V-1.ab2c";
onix.startupmessage = "Onix Loading";
onix.vrs = "v1.0";
onix.echo = function(msg)
{
  console.log(msg)
};

onix.echo(onix.startupmessage)
wait(2)
onix.echo(onix.vrs)
wait(2)
onix.echo("Operating System Copyright (C) 2016, Onix")
onix.echo("All rights reserved.")
