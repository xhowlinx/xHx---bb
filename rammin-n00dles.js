/** @param {NS} ns **/export async function main(ns) {
ns.tail();
ns.disableLog('ALL');ns.print('Keep Open and Re-size ALL Windows With Monitor in the title. Close this window.');

var files = ['port0.js','port1.js','port2.js','port3.js','port4.js','port5.js','pushhome.js','pushserv.js','deathMonitor.js','homeRamMonitor.js','hackingToolsMonitor.js','upservMonitor.js','n00dle-Shack.js','bang-bang-shoot-em-up.js','alias.js','purchaseServers.js','serverDelete.js','purchaseServersMonitor.js','WGn00dles.js','2GBHack.js','infiniteServersUpdate.js'];
//line+10/value..[0]........[1]........[2]........[3]........[4]........[5].........[6]...........[7].............[8].............[9]...................[10]..................[11]................[12]..................[13]...............[14]..............[15]...............[16]...................[17].................[18]...........[19]...............
//size..........3.60GB.....3.65GB.....3.70GB.....3.75GB.....3.80GB.....3.85GB......3.15GB........4.05GB..........1.70GB..........2.75GB................3.25GB................2.90GB..............2.40GB................2.40GB.............1.6GB.............6.25GB.............6.60GB.................8.95.................1.90GB.........2.00GB.................
//..........|          refers to servers #ports req. to backdoor              |     pushes hack files     | watch them die |   a reminder      |  when/what hax to buy  |  (obsolete)      |  early-hack    |    hack joe's guns       | lazy     | buy 25 2GB servers |     utility     | upgrade purchased servers |  weaken/grow  |  w.g.w.g.h  |                                                             
//await ns.scp('upservMonitor.js','n00dles');ns.exec('upservMonitor.js','n00dles');
	await ns.write(files[0], "/** @param {NS} ns **/export async function main(ns) {ns.nuke('n00dles');await ns.scp('deathMonitor.js','n00dles');ns.exec('deathMonitor.js','n00dles');await ns.scp('WGn00dles.js','n00dles');ns.exec('WGn00dles.js','n00dles');var servers = ['foodnstuff','nectar-net','sigma-cosmetics','hong-fang-tea','joesguns','harakiri-sushi'];var i=0;while(i<servers.length){if(servers.length>i)ns.nuke(servers[i]);await ns.scp('n00dle-Shack.js',servers[i]);ns.exec('n00dle-Shack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[1], "/** @param {NS} ns **/export async function main(ns) {var servers = ['CSEC','neo-net','zer0','max-hardware','iron-gym'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dle-Shack.js',servers[i]);ns.exec('n00dle-Shack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[2], "/** @param {NS} ns **/export async function main(ns) {var servers = ['phantasy','the-hub','avmnite-02h','omega-net','silver-helix'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dle-Shack.js',servers[i]);ns.exec('n00dle-Shack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[3], "/** @param {NS} ns **/export async function main(ns) {var servers = ['catalyst','summit-uni','netlink','I.I.I.I','rothman-uni','rho-construction','millenium-fitness'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dle-Shack.js',servers[i]);ns.exec('n00dle-Shack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[4], "/** @param {NS} ns **/export async function main(ns) {var servers = ['global-pharm','aevum-police','lexo-corp','alpha-ent','run4theh111z','unitalife','univ-energy','.'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dle-Shack.js',servers[i]);ns.exec('n00dle-Shack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[5], "/** @param {NS} ns **/export async function main(ns) {var servers = ['solaris','omnia','zb-institute','microdyne','titan-labs','blade','fulcrumtech','powerhouse-fitness'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.sqlinject(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dle-Shack.js',servers[i]);ns.exec('n00dle-Shack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[6], "/** @param {NS} ns **/export async function main(ns) {ns.kill('bang-bang-shoot-em-up.js','home');ns.kill('n00dle-Shack.js','home');var threads = (Math.floor((ns.getServerMaxRam('home')-16)/2.4)-1)ns.run('bang-bang-shoot-em-up.js',threads);}","w");
	await ns.write(files[7], "/** @param {NS} ns **/export async function main(ns) {ns.tail();var i = 0;{while(i<25){ns.killall('xHx-'+i);await ns.scp('2GBHack.js','xHx-'+i);ns.exec('2GBHack.js','xHx-'+i,(ns.getServerMaxRam('xHx-'+i)/2.4));++i;await ns.hack('n00dles');}}}", "w");
	await ns.write(files[8], "/** @param {NS} ns **/export async function main(ns) {var i = 0;ns.tail();ns.disableLog('ALL');while(true){ns.clearLog();var dt = Math.round(ns.getServerMoneyAvailable('n00dles'));if(dt==0)++i;ns.print('n00dles death count:');ns.print(Math.round((i*.420)/60),' seconds');ns.print(' ');ns.print('home    : $',Math.round(ns.getServerMoneyAvailable('home')),'.00');ns.print('n00dles : $',Math.round(ns.getServerMoneyAvailable('n00dles')),'.00');ns.print('joesguns: $',Math.round(ns.getServerMoneyAvailable('joesguns')),'.00');ns.print('iron-gym: $',Math.round(ns.getServerMoneyAvailable('iron-gym')),'.00');await ns.sleep(.420);}}","w");
	await ns.write(files[9], "/** @param {NS} ns **/export async function main(ns) {while(ns.getServerMaxRam('home')<16){ns.clearLog();ns.tail();ns.print('go City --> Alpha Ent. --> Upgrade home RAM');await ns.hack('n00dles');}ns.run('hackingToolsMonitor.js');while(ns.getServerMaxRam('home')<32){ns.clearLog();	ns.tail();ns.print('go City --> Alpha Ent. --> Upgrade home RAM');await ns.hack('n00dles');}ns.run('purchaseServers.js');while(ns.getServerMaxRam('home')<64){ns.clearLog();ns.tail();ns.print('go City --> Alpha Ent. --> Upgrade home RAM');await ns.hack('n00dles');}while(ns.getServerMaxRam('home')<128){ns.clearLog();ns.tail();ns.print('go City --> Alpha Ent. --> Upgrade home RAM');await ns.hack('n00dles');}ns.run('pushhome.js');while(ns.getServerMaxRam('home')<256){ns.clearLog();ns.tail();ns.print('go City --> Alpha Ent. --> Upgrade home RAM');await ns.hack('n00dles');}ns.run('pushhome.js');}","w");
	await ns.write(files[10],"/** @param {NS} ns **/export async function main(ns) {ns.tail();while(!ns.serverExists('darkweb')){ns.clearLog();ns.tail();ns.print('go City --> Alpha Ent. --> Purchase TOR Router');await ns.hack('n00dles');}if(ns.fileExists('FTPCrack.exe'))await ns.hack('n00dles');while(!ns.fileExists('BruteSSH.exe')){ns.clearLog();ns.tail();ns.print('run alias.js and copy/paste into terminal for root and rebuy aliases. -note:needs formatting.');ns.print('Connect Darkweb --> buy BruteSSH.exe (can use rebuy)');await ns.hack('n00dles');}ns.run('port1.js');if(ns.fileExists('FTPCrack.exe'))await ns.hack('n00dles');while(!ns.fileExists('Autolink.exe')){ns.clearLog();ns.tail();ns.print('Connect Darkweb --> buy Autolink.exe');ns.print('connect CSEC, use root on CSEC, then join and begin hacking contracts.');await ns.hack('n00dles');}while(!ns.fileExists('FTPCrack.exe')){ns.clearLog();ns.tail();ns.print('connect CSEC, use root on CSEC, then join and begin hacking contracts.');ns.print('Connect Darkweb --> buy FTPCrack.exe');await ns.hack('n00dles');}ns.run('port2.js');if(ns.fileExists('relaySMTP.exe'))await ns.hack('n00dles');while(!ns.fileExists('relaySMTP.exe')){ns.clearLog();ns.tail();ns.print('Connect Darkweb --> buy relaySMTP.exe');await ns.hack('n00dles');}await ns.hack('n00dles');ns.run('port3.js');if(ns.fileExists('HTTPWorm.exe'))await ns.hack('n00dles');while(!ns.fileExists('HTTPWorm.exe')){ns.clearLog();ns.tail();ns.print('Connect Darkweb --> buy HTTPWorm.exe');await ns.hack('n00dles');}await ns.hack('n00dles');ns.run('port4.js');while(!ns.fileExists('SQLInject.exe')){ns.clearLog();ns.tail();ns.print('Connect Darkweb --> buy SQLInject.exe');await ns.hack('n00dles');}await ns.hack('n00dles');ns.run('port5.js');}","w");
	await ns.write(files[11],"/** @param {NS} ns **/export async function main(ns) {ns.tail();if(!ns.serverExists('xHx-24'))while(ns.getServerMoneyAvailable('home')<5500000){await ns.hack('n00dles');}ns.exec('purchaseServers.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==4)while(ns.getServerMoneyAvailable('home')<12000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==8)while(ns.getServerMoneyAvailable('home')<24000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==16)while(ns.getServerMoneyAvailable('home')<45000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==32)while(ns.getServerMoneyAvailable('home')<90000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==64)while(ns.getServerMoneyAvailable('home')<180000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==128)while(ns.getServerMoneyAvailable('home')<360000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==256)while(ns.getServerMoneyAvailable('home')<704000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');{await ns.hack('n00dles');}if(ns.getServerMaxRam('xHx-0')==512)while(ns.getServerMoneyAvailable('home')<1408000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==1024)while(ns.getServerMoneyAvailable('home')<2816000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==2048)while(ns.getServerMoneyAvailable('home')<5632000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==4096)while(ns.getServerMoneyAvailable('home')<11264000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==8192)while(ns.getServerMoneyAvailable('home')<22528000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==16384)while(ns.getServerMoneyAvailable('home')<45056000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==32768)while(ns.getServerMoneyAvailable('home')<90112000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==65536)while(ns.getServerMoneyAvailable('home')<180224000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==131072)while(ns.getServerMoneyAvailable('home')<360448000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==262144)while(ns.getServerMoneyAvailable('home')<720896000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');await ns.hack('n00dles');if(ns.getServerMaxRam('xHx-0')==524288)while(ns.getServerMoneyAvailable('home')<1441792000000){await ns.hack('n00dles');}ns.exec('upserv.js','home');}","w");
	await ns.write(files[12],"/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('n00dles')>(ns.getServerMinSecurityLevel('n00dles')+2))await ns.weaken('n00dles');else if(ns.getServerMoneyAvailable('n00dles')<(ns.getServerMaxMoney('n00dles')*.420))await ns.grow('n00dles');else await ns.hack('n00dles');}","w");
	await ns.write(files[13],"/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('joesguns')>(ns.getServerMinSecurityLevel('joesguns')+2))await ns.weaken('joesguns');else if(ns.getServerMoneyAvailable('joesguns')<(ns.getServerMaxMoney('joesguns')*.95))await ns.grow('joesguns');else await ns.hack('joesguns');}","w");
	await ns.write(files[14],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('alias root=run BruteSSH.exe;run FTPCrack.exe;run relaySMTP.exe;run HTTPworm.exe;run SQLInject.exe;run NUKE.exe;backdoor');ns.print('alias rebuy=buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; buy DeepscanV1.exe; buy DeepscanV2.exe; buy AutoLink.exe')}", "w");
	await ns.write(files[15],"/** @param {NS} ns **/export async function main(ns) {ns.tail();var ram = 2;var i = 0;while (i < ns.getPurchasedServerLimit()){while (ns.getServerMoneyAvailable('home') < ns.getPurchasedServerCost(ram)){ns.clearLog();await ns.sleep(420);}var hostname = ns.purchaseServer('xHx-' + i, ram);await ns.scp('2GBHack.js', hostname);ns.exec('2GBHack.js', hostname, (ram/2));++i;await ns.sleep(420);}ns.atExit(ns.exec('purchaseServersMonitor.js','home'))}","w");
	await ns.write(files[16],"/** @param {NS} ns **/export async function main(ns) {var currentServers = ns.getPurchasedServers();for (var i = 0; i < currentServers.length; ++i) {var serv = currentServers[i];ns.killall(serv);ns.deleteServer(serv);}}","w");
	await ns.write(files[17],"/** @param {NS} ns **/export async function main(ns) {ns.tail();while(true){var ram = (ns.getServerMaxRam('xHx-24')*2);ns.print(ram,);var i = 0;while (i < ns.getPurchasedServerLimit()){while (ns.getServerMoneyAvailable('home') < ns.getPurchasedServerCost(ram)){ns.clearLog();;ns.print('last upgrade:    ',hostname,' to: ', ram/2,'GB.......');ns.print('.... waiting for available funds for next server purchase');await ns.hack('n00dles');}ns.clearLog();{ns.killall('xHx-' + i);ns.deleteServer('xHx-' + i);ns.clearLog();var hostname = ns.purchaseServer('xHx-' + i, ram);ns.print('Upgrading  ',hostname,' to: ', ram,'GB.......');await ns.scp('2GBHack.js', hostname);ns.print('installing hack....');ns.exec('2GBHack.js', hostname, (ram/2));ns.print('running hack.......');++i;await ns.hack('n00dles');}}}}","w");
	await ns.write(files[18],"/** @param {NS} ns **/export async function main(ns) {while(true)await ns.weaken('n00dles');await ns.grow('n00dles');}","w");
	await ns.write(files[19],"/** @param {NS} ns **/export async function main(ns) {var target='n00dles';while(true){await ns.weaken(target);await ns.grow(target);await ns.weaken(target);await ns.grow(target);await ns.hack(target);}}","w");
	await ns.write(files[20],"/** @param {NS} ns **/export async function main(ns) {ns.tail();while(true){var ram = (ns.getServerMaxRam('xHx-24')*2);ns.print(ram,);var i = 0;while (i < ns.getPurchasedServerLimit()){while (ns.getServerMoneyAvailable('home') < ns.getPurchasedServerCost(ram)){ns.clearLog();ns.print('if you choose to cancel, Kill ^^, then Run when ready');ns.print('  ');ns.print('otherwise, .... waiting for available funds for next pruchase');await ns.hack('n00dles');}ns.clearLog();{ns.killall('xHx-' + i);ns.deleteServer('xHx-' + i);ns.clearLog();var hostname = ns.purchaseServer('xHx-' + i, ram);ns.print('Upgrading  ',hostname,' to: ', ram,'GB.......');await ns.scp('2GBHack.js', hostname);ns.print('installing hack....');ns.exec('2GBHack.js', hostname, (ram/2));ns.print('running hack.......');++i;await ns.hack('n00dles');}}}}","w");

var aSU = await ns.prompt('Select Yes for option to Turn Off automatic Server Upgrades. If yes, each cycle of upgrades will need confirmation to proceed and the use of the Run button in the tail window to resume. To resume upgrades without interaction(default), switch modes with the use of the button labelled Kill all running scripts, and re-run this starting script and choose No instead.');

if(aSU)await ns.write(files[17],"/** @param {NS} ns **/export async function main(ns) {ns.tail();while(true){ram=0;var iSU = await ns.prompt('Stop Purchasing Servers?');{if(iSU)meanstoanend;ns.exit;}var ram = (ns.getServerMaxRam('xHx-24')*2);ns.print(ram,);var i = 0;while (i < ns.getPurchasedServerLimit()){while (ns.getServerMoneyAvailable('home') < ns.getPurchasedServerCost(ram)){ns.clearLog();;ns.print('last upgrade:    ',hostname,' to: ', ram,'GB.......');ns.print('.... waiting for available funds for next server purchase');await ns.hack('n00dles');}ns.clearLog();{ns.killall('xHx-' + i);ns.deleteServer('xHx-' + i);ns.clearLog();var hostname = ns.purchaseServer('xHx-' + i, ram);ns.print('Upgrading  ',hostname,' to: ', ram,'GB.......');await ns.scp('2GBHack.js', hostname);ns.print('installing hack....');ns.exec('2GBHack.js', hostname, (ram/2));ns.print('running hack.......');++i;await ns.hack('n00dles');}}}}","w");
//ns.run('delserv.js');await ns.hack('n00dles');
var i=0;

for(i=0;i<10;++i)
	{
		if(i!==6&&i!==8)
		{ns.run(files[i]);ns.print('running...  ',(files[i]));
		await ns.sleep(1024);}
	}
ns.run(files[12]);
ns.run(files[17]);
}
