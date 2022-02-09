/** @param {NS} ns **/export async function main(ns) 
{ns.tail();
var cost = [11000000,22000000,44000000,88000000,176000000,352000000,704000000,1408000000,2816000000,5632000000,11264000000,22258000000,45056000000,90112000000,180224000000,360448000000,720896000000,1441792000000];
var ram = 8;
var c = 0;
var i = 0;
var x = 0;

for(x<cost.length;++x;)
if(!ns.serverExists('xHx-24'))
while(i<ns.getPurchasedServerLimit())

{ns.purchaseServer('xHx-'+i,ram);
await ns.scp('n00dleshack.js','xHx-'+i);
ns.exec('n00dleshack.js','xHx-'+i,(ram/2.4));
++i;}

await ns.sleep(3000);
++c;
if(ns.serverExists('xHx-24'))

{while(ns.getServerMoneyAvailable('home')<cost[c])
{await ns.sleep(6000);}
ram*2;i=0;
while(i<ns.getPurchasedServerLimit())

{ns.killall('xHx-'+i);
ns.deleteServer('xHx-'+i);
ns.purchaseServer('xHx-'+i,ram);
await ns.scp('n00dleshack.js','xHx-'+i);
ns.exec('n00dleshack.js','xHx-'+i,(ram/2.4));
++i;}

await ns.sleep(3000);
++c;
}}
