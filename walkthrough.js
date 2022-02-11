/** @param {NS} ns **/export async function main(ns) {

	ns.tail();ns.clearLog();


	var files = ['port0.js', 'port1.js', 'port2.js', 'port3.js', 'port4.js', 'port5.js', 'n00dleshack.js', 'alias.js', 'pushserv.js','delserv.js','launchupserv.js','upserv.js','intro.js','upserv2GB.js','upservmonitor.js','pushhome.js','xhx2gbhax.js'];
	//---------------[0]---------[1]---------[2]---------[3]---------[4]---------[5]-----------[6]-------------[7]----------[8]-----------[9]-----------[10]-------------[11]-------[12]---------[13]----------[14]---------------[15]------------
	//.............3.60GB........3.65GB.....3.70GB.......3.75GB....3.80GB.......3.85GB........2.40GB..........1.60GB.......4.05GB.......4.35GB.........2.60GB...........8.60GB......1.60GB........6.15GB.......2.75GB............3.15GB..........

	await ns.write(files[0], "/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.nuke('n00dles');await ns.scp('xhx2gbhax.js','n00dles');ns.exec('xhx2gbhax.js','n00dles',2);var servers = ['foodnstuff','nectar-net','sigma-cosmetics','hong-fang-tea','joesguns','harakiri-sushi'];var i=0;while(i<servers.length){if(servers.length>i)ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[1], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var servers = ['CSEC','neo-net','zer0','max-hardware','iron-gym'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[2], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var servers = ['phantasy','the-hub','avmnite-02h','omega-net','silver-helix'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[3], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var servers = ['catalyst','summit-uni','netlink','I.I.I.I','rothman-uni','rho-construction','millenium-fitness'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[4], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var servers = ['global-pharm','aevum-police','lexo-corp','alpha-ent','run4theh111z','unitalife','univ-energy','.'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[5], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var servers = ['solaris','omnia','zb-institute','microdyne','titan-labs','blade','fulcrumtech','powerhouse-fitness'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.sqlinject(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[6], "/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('n00dles')>(ns.getServerMinSecurityLevel('n00dles')+2))await ns.weaken('n00dles');else if(ns.getServerMoneyAvailable('n00dles')<(ns.getServerMaxMoney('n00dles')*.9))await ns.grow('n00dles');else await ns.hack('n00dles');}", "w");
	await ns.write(files[7], "/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('alias root=run BruteSSH.exe;run FTPCrack.exe;run relaySMTP.exe;run HTTPworm.exe;run SQLInject.exe;run NUKE.exe;backdoor');ns.print('alias rebuy=buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; buy DeepscanV1.exe; buy DeepscanV2.exe; buy AutoLink.exe')}", "w");
	await ns.write(files[8], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var i = 0;{while(i<25){ns.killall('xHx-'+i);await ns.scp('n00dleshack.js','xHx-'+i);ns.exec('n00dleshack.js','xHx-'+i,(ns.getServerMaxRam('xHx-'+i)/2.4));++i;}}}", "w");
	await ns.write(files[9], "/** @param {NS} ns **/export async function main(ns){ns.disableLog('ALL');var i = 0; while(i<25){ns.killall('xHx-' + i);ns.deleteServer('xHx-' + i);++i;}}","w");
	await ns.write(files[10],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.run('upserv.js');}","w")
	await ns.write(files[11],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.tail();var i = 0;var ram = ns.getServerMaxRam('xHx-0');while(i<ns.getPurchasedServerLimit()){ns.killall('xHx-'+i);ns.deleteServer('xHx-'+i);ns.purchaseServer('xHx-'+i,ram*2);await ns.scp('n00dleshack.js',('xHx-'+i));ns.exec('n00dleshack.js',('xHx-'+i),((ram*2)/2.4));++i;}await ns.sleep(3000);}","w");
	await ns.write(files[12],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('Welcome to:  Meat me at the N00dle Shack! Be sure to upgrade home ram and buy all the hacks from darkweb in order of availabilty.');  }","w");
	await ns.write(files[13],"/** @param {NS} ns **/export async function main(ns) {ns.tail();var ram = 2;var i = 0;while (i < ns.getPurchasedServerLimit()) {if (ns.getServerMoneyAvailable('home') > ns.getPurchasedServerCost(ram)) {var hostname = ns.purchaseServer('xHx-' + i, ram);await ns.scp('xhx2gbhax.js', hostname);ns.exec('xhx2gbhax.js', hostname, (ram/2));++i;}}}","w");
	await ns.write(files[14],"/** @param {NS} ns **/export async function main(ns) {ns.tail();while(ns.getServerMoneyAvailable('home')<352000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<704000000){await ns.sleep(10000);}ns.run('upserv.js');{await ns.sleep(10000);}while(ns.getServerMoneyAvailable('home')<1408000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<2816000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<5632000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<11264000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<22528000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<45056000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<90112000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<180224000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<360448000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<720896000000){await ns.sleep(10000);}ns.run('upserv.js');while(ns.getServerMoneyAvailable('home')<1441792000000){await ns.sleep(10000);}ns.run('upserv.js');}","w");
	await ns.write(files[15],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.kill('n00dleshack.js','home');var threads = (Math.floor(ns.getServerMaxRam('home')-10)/2.4);ns.run('n00dleshack.js',threads);}","w");
	await ns.write(files[16],"/** @param {NS} ns **/export async function main(ns) {while(true){await ns.weaken('n00dles');await ns.grow('n00dles');await ns.weaken('n00dles');await ns.hack('n00dles');}}","w");




ns.run('port0.js');
await ns.sleep(5000);
ns.run('n00dleshack.js');
if(ns.fileExists('BruteSSH.exe'))await ns.sleep(5000);

//check for tor router...

while(!ns.serverExists('darkweb'))
{
////	ns.purchaseTor();
	ns.clearLog();
	ns.tail();
	ns.print('go City --> Alpha Ent. --> Purchase TOR Router');
	await ns.hack('n00dles');
}

//check for ns.brutessh and run when avaiable

while(!ns.fileExists('BruteSSH.exe'))
{
////	ns.purchaseProgram('brutessh.exe');
	ns.clearLog();
	ns.tail();
	ns.print('run alias.js and copy/paste into terminal for root and rebuy aliases. -note:needs formatting.');
	ns.print('Connect Darkweb --> buy BruteSSH.exe (can use rebuy)');
	await ns.hack('n00dles');
}
ns.run('port1.js');

//upgrade home ram and run more scripts

while(ns.getServerMaxRam('home')<16)
{
////	ns.upgradeHomeRam();
	ns.clearLog();
	ns.tail();
	ns.print('go City --> Alpha Ent. --> Upgrade home RAM');
	await ns.hack('n00dles');
}

ns.run('pushhome.js');
if(ns.fileExists('FTPCrack.exe'))await ns.sleep(5000);

//check for autolink.exe and stall until available

while(!ns.fileExists('Autolink.exe'))
{

	ns.clearLog();
	ns.tail();
	ns.print('Connect Darkweb --> buy Autolink.exe(can use rebuy)');
	ns.print('connect CSEC, use root on CSEC, then join faction if you like and begin hacking contracts.');
	await ns.hack('n00dles');
}

//check for ns.ftpcrack and run when available

while(!ns.fileExists('FTPCrack.exe'))
{

	ns.clearLog();
	ns.tail();
	ns.print('Connect Darkweb --> buy FTPCrack.exe(can use rebuy)');
	await ns.hack('n00dles');
}

ns.run('port2.js');
if(ns.fileExists('relaySMTP.exe'))await ns.sleep(5000);

//purchases 25 2GB servers ASAP

if(!ns.serverExists('xHx-24'))
	{
		while(ns.getServerMoneyAvailable('home')<2750000)
		{
			ns.clearLog();
			ns.print('.....waiting to buy 25 2GB servers.....');
			await ns.sleep(5000);
		}

	ns.run('upserv2GB.js');
	await ns.sleep(10000);
	}

//upgrade home ram and run more scripts

while(ns.getServerMaxRam('home')<32)
{
	ns.clearLog();
	ns.tail();
	ns.print('go City --> Alpha Ent. --> Upgrade home RAM');
	await ns.hack('n00dles');
}
ns.run('pushhome.js');
//check for ns.relaysmtp and runs when available

while(!ns.fileExists('relaySMTP.exe'))
{

	ns.clearLog();
	ns.tail();
	ns.print('Connect Darkweb --> buy relaySMTP.exe(can use rebuy)');
	await ns.hack('n00dles');
}

ns.run('port3.js');
if(ns.fileExists('HTTPWorm.exe'))await ns.sleep(5000);

//purchases 25 4GB servers ASAP

while(ns.getServerMoneyAvailable('home')<5500000)
{
	ns.clearLog();
	ns.print('.....waiting to buy 25 @ 4GB servers.....');
	await ns.sleep(5000);
}

ns.run('upserv.js');

//upgrade home ram and run more scripts

while(ns.getServerMaxRam('home')<64)
{
	ns.clearLog();
	ns.tail();
	ns.print('go City --> Alpha Ent. --> Upgrade home RAM');
	await ns.hack('n00dles');
}

ns.run('pushhome.js');
if(ns.fileExists('HTTPWorm.exe'))await ns.sleep(5000);



while(ns.getServerMoneyAvailable('home')<11000000)
{
	ns.clearLog();
	ns.print('.....waiting to buy 25 @ 8 GB servers.....');
	await ns.sleep(5000);
}

ns.run('upserv.js');



while(ns.getServerMoneyAvailable('home')<22000000)
{
	ns.clearLog();
	ns.print('.....waiting to buy 25 @ 16 GB servers.....');
	await ns.sleep(5000);
}

ns.run('upserv.js');

//check for ns.httpworm and run when available

while(!ns.fileExists('HTTPWorm.exe'))
{

	ns.clearLog();
	ns.tail();
	ns.print('Connect Darkweb --> buy HTTPWorm.exe(can use rebuy)');
	await ns.hack('n00dles');
}
ns.run('port4.js');

//upgrade home ram and run more scripts

while(ns.getServerMaxRam('home')<128)
{
	ns.clearLog();
	ns.tail();
	ns.print('go City --> Alpha Ent. --> Upgrade home RAM');
	await ns.hack('n00dles');
}

ns.run('pushhome.js');
if(ns.fileExists('SQLinject.exe'))await ns.sleep(5000);

//upgrade purchaced servers and run more scripts

while(ns.getServerMoneyAvailable('home')<44000000)
{
	ns.clearLog();
	ns.print('.....waiting to buy 25 @ 32 GB servers.....');
	await ns.sleep(5000);
}

ns.run('upserv.js');

//upgrade purchased servers and run more scripts

while(ns.getServerMoneyAvailable('home')<88000000)
{
	ns.clearLog();
	ns.print('.....waiting to buy 25 @ 64 GB servers.....');
	await ns.sleep(5000);
}

ns.run('upserv.js');

//upgrade home ram and run more scripts

while(ns.getServerMaxRam('home')<256)
{
	ns.clearLog();
	ns.tail();
	ns.print('go City --> Alpha Ent. --> Upgrade home RAM');
	await ns.hack('n00dles');
}

ns.run('pushhome.js');
if(ns.fileExists('SQLInject.exe'))await ns.sleep(5000);

//upgrade purchased servers and run more scripts

while(ns.getServerMoneyAvailable('home')<176000000)
{
	ns.clearLog();
	ns.print('.....waiting to buy 25 @ 128 GB servers.....');
	await ns.sleep(5000);
}

ns.run('upserv.js');
if(ns.fileExists('SQLInject.exe'))await ns.sleep(5000);

//check for ns.sqlinject and run when availble

while(!ns.fileExists('SQLInject.exe'))
{

	ns.clearLog();
	ns.tail();
	ns.print('Connect Darkweb --> buy SQLInject.exe(can use rebuy)');
	await ns.hack('n00dles');
}
ns.run('port5.js');
await sleep(5000);
ns.atExit(ns.run('upservmonitor.js'));


}
