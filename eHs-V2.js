/** @param {NS} ns **/export async function main(ns){
	var i=0;
	var f=0;
	var port0 = ['n00dles','foodnstuff','nectar-net','sigma-cosmetics','hong-fang-tea','joesguns','harakiri-sushi']
//	var port1=['CSEC','neo-net','zer0','max-hardware','iron-gym'];
//	var port2=['phantasy','the-hub','avmnite-02h','omega-net','silver-helix'];
//	var port3=['catalyst','summit-uni','netlink','I.I.I.I','rothman-uni','rho-construction','millenium-fitness'];
//	var port4= ['global-pharm','aevum-police','lexo-corp','alpha-ent','run4theh111z','unitalife','univ-energy','.'];
//	var port5=['solaris','omnia','zb-institute','microdyne','titan-labs','blade','fulcrumtech','powerhouse-fitness'];
	var files=['purchaseServerUpgrade.js','launchPSU.script','runn00dles.js','2gbh.js','n00dleShack.js','bang-bang-shoot-em-up.js','pushServ.js','pushHome.js','wg.js','ws.script','gs.script','hs.script','serverDelete.js'];
	await ns.write('purchaseServerUpgrade.js', "/** @param {NS} ns **/export async function main(ns) {ns.tail();var approve = await ns.prompt('Option to pause future sets of Upgrades?');while (true) {var ram = (ns.getServerMaxRam('xHx-24') * 2);ns.print(ram);var i = 0;while (i < ns.getPurchasedServerLimit()) {while (ns.getServerMoneyAvailable('home') * .1 < ns.getPurchasedServerCost(ram)) {await ns.sleep(.1);} {ns.kill('runn00dles.js', 'xHx-' + i);ns.kill('2gbh.js', 'xHx-' + i);ns.kill('bang-bang-shoot-em-up.js', 'xHx-' + i);ns.kill('eHs-V2.js', 'xHx-' + i);ns.clearLog();ns.tail();ns.deleteServer('xHx-' + i);var hostname = ns.purchaseServer('xHx-' + i, ram);ns.print(' @ ', ram, 'GB.'); {await ns.scp('runn00dles.js', hostname);await ns.scp('bang-bang-shoot-em-up.js', hostname);await ns.scp('eHs-V2.js', hostname);await ns.scp('2gbh.js', hostname);}var threads=Math.floor(((ram /3)/ 2));if(threads<=1){++threads;}var bbseuthreads=Math.floor(((ram /3)/ 2.4));if(bbseuthreads<=1){++bbseuthreads;}{ ns.exec('runn00dles.js', hostname, threads ); }{ ns.exec('2gbh.js', hostname, threads ); }{ ns.exec('bang-bang-shoot-em-up.js', hostname, bbseuthreads ); }++i;await ns.sleep(.1);}}await ns.sleep(.1);if (approve) {var stopUpgrades = await ns.prompt('pause upgrades?');if (stopUpgrades) aMethodtoTSR();}}}", 'w');
	await ns.write('launchPSU.script', "run('pushServ.js');run('pushHome.js');while(getServerMaxRam('home')<=16){tail();print('upgrade home ram to 16GB to continue with PurchaseServerUpgrade.');hack('n00dles');sleep(5318.008);clearLog();}run('purchaseServerUpgrade.js');", 'w');
	await ns.write('runn00dles.js', "/** @param {NS} ns **/export async function main(ns) {while(true){await ns.weaken('n00dles');await ns.grow('n00dles');}}", 'w');
	await ns.write('2gbh.js', "/** @param {NS} ns **/export async function main(ns) {var target = 'n00dles';while(true){await ns.weaken(target);await ns.grow(target);await ns.hack(target);}}", 'w');
	await ns.write('n00dleShack.js', "/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('n00dles')>(ns.getServerMinSecurityLevel('n00dles')+2))await ns.weaken('n00dles');else if(ns.getServerMoneyAvailable('n00dles')<(ns.getServerMaxMoney('n00dles')*.95))await ns.grow('n00dles');else await ns.sleep(.1);}", "w");//	await ns.write('bbseu.js',"/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('joesguns')>(ns.getServerMinSecurityLevel('joesguns')+2))await ns.weaken('joesguns');else if(ns.getServerMoneyAvailable('joesguns')<(ns.getServerMaxMoney('joesguns')*.95))await ns.grow('joesguns');else await ns.hack('joesguns');}","w");",'w');
	await ns.write('bang-bang-shoot-em-up.js', "/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('joesguns')>(ns.getServerMinSecurityLevel('joesguns')+2))await ns.weaken('joesguns');else if(ns.getServerMoneyAvailable('joesguns')<(ns.getServerMaxMoney('joesguns')*.95))await ns.grow('joesguns');else await ns.hack('joesguns');}", "w");
	await ns.write('pushServ.js',"/** @param {NS} ns **/export async function main(ns) {ns.tail();var i = 0;{while(i<25){ns.killall('xHx-'+i);await ns.scp('bang-bang-shoot-em-up.js','xHx-'+i);ns.exec('bang-bang-shoot-em-up.js','xHx-'+i,(ns.getServerMaxRam('xHx-'+i)/2.4));++i;await ns.sleep(.1);}}}",'w');
	await ns.write('pushHome.js',"/** @param {NS} ns **/export async function main(ns) {var threads = (Math.floor(ns.getServerMaxRam('home')-15)/2.4);ns.run('n00dleShack.js',threads);}",'w');
	await ns.write('wg.js',"/** @param {NS} ns **/export async function main(ns) {var target=ns.getHostname();while(true){await ns.grow(target);await ns.weaken(target);}}",'w');
	await ns.write('ws.script','weaken(args)','w');
	await ns.write('gs.script','grow(args)','w');
	await ns.write('hs.script','hack(args)','w');
	await ns.write('serverDelete.js',"/** @param {NS} ns **/export async function main(ns) {var currentServers = ns.getPurchasedServers();for (var i = 0; i < currentServers.length; ++i) {var serv = currentServers[i];ns.killall(serv);ns.deleteServer(serv);}}","w");
var servers=port0
for(let server of servers){
let openPorts = 0;
if (ns.fileExists("BruteSSH.exe")){ns.brutessh(server);++openPorts;}
if (ns.fileExists("FTPCrack.exe")){ns.ftpcrack(server);++openPorts;}
if (ns.fileExists("RelaySMTP.exe")){ns.relaysmtp(server);++openPorts;}
if (ns.fileExists("HTTPWorm.exe")){ns.httpworm(server);++openPorts;}
if (ns.fileExists("SQLInject.exe")){ns.sqlinject(server);++openPorts;}
if (ns.getServerNumPortsRequired(server) <= openPorts) {ns.nuke(server);}

}




	
	while(i<servers.length){ns.nuke(servers[i]);++i;}
	i=0;
	while(i<servers.length){await ns.scp(files,servers[i]);++i;}
	i=0;var sRam=ns.getServerMaxRam(servers[i]);var hRam=(ns.getServerMaxRam('home'));var hUsedRam=ns.getServerUsedRam('home');
	while(i<servers.length){ns.exec(files[8],servers[i]);(sRam/2),servers[i];await ns.sleep(.1);++i;}




	ns.tail();

	while (true) 
	{f=0;var target='n00dles';
		while(f<servers.length){ns.nuke(servers[f])
			var gwthreads=Math.floor((((ns.getServerMaxRam(servers[f])-ns.getServerUsedRam(servers[f]))/1.75))/2);
			if(gwthreads<=1){++gwthreads;}
			var hthreads=Math.floor((((ns.getServerMaxRam(servers[f])-ns.getServerUsedRam(servers[f]))/1.7))/2);
			if(hthreads<=1){++hthreads;}
			ns.exec('ws.script',servers[f],gwthreads,target);
			//ns.exec('ws.script','home',1,target);
			
		
			ns.exec('gs.script',servers[f],gwthreads,target);
			//ns.exec('gs.script','home',1,target);
			
		
		if((ns.getServerSecurityLevel(target)<(ns.getServerMinSecurityLevel(target)+.1))&&(ns.getServerMoneyAvailable(target)>(ns.getServerMaxMoney(target)*.95))){
			ns.exec('hs.script',servers[f],hthreads,target)
			ns.exec('hs.script','home',(((hRam-hUsedRam)/1.7)),target);
			await ns.sleep(.1);}
		if(ns.getServerRequiredHackingLevel(servers[f])<=ns.getHackingLevel()){
		ns.exec('hs.script','home',1,servers[f]);}
		++f;await ns.sleep(1000);
		}
		await ns.sleep(.1);
	}


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);



}
