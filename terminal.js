var onix = {};
onix.cmds = {};
onix.initial = "Onix-V-1.ab2c"; 
onix.startupmessage = "Onix Loading"; 
onix.vrs = "v1.0";
while(true)
{
  var prompt = prompt("COMMAND?")
}
onix.echo = function(msg)
{ 
console.log(msg) 
};
onix.cmd = function(cmd, func)
{
  if (prompt === cmd)
  {
    onix.cmds = onix.cmds+cmd
    require(func)
  }
  else
  {
    onix.echo("Fatal error: command "+prompt+" not found.")
  };
};
// CMDS
/* Echo */
onix.cmd("echo "+null, function()
  onix.echo(null)
);
/* File */
onix.cmd("file "+null[1]+" "+null[2]+" "+null[3], function()
  var file = new(null[2])
  file.Name = null[1]
  file.Location = null[3]
);
/* Cmd */
onix.cmd("cmd "+null[1]+" "+null[2], function()
  if (null[2] === onix.cmds)
  {
    prompt = null[2]
  }
  else
  {
   onix.echo("Fatal error: command "+prompt+" not found.")
  }
);
