/** @param {NS} ns **/export async function main(ns) {
ns.tail();ns.disableLog('ALL');
// Mini-game!! correct the file "upserv.js" before time runs out! Start with fresh game. Be sure to upgrade home ram and buy all the hacks from darkweb in order of availabilty. 
//welcome. 'port0' refers to servers that require zero ports to open. alias has rebuy and root. pushserv pushes a script. upserv for incremental upgrade of purchased severs to max ram. launchupserv obsolete.
//hover over text in editor for comments & price.

	var files = ['port0.js', 'port1.js', 'port2.js', 'port3.js', 'port4.js', 'port5.js', 'n00dleshack.js', 'alias.js', 'pushserv.js','delserv.js','launchupserv.js','upserv.js','intro.js'];
	//---------------[0]---------[1]---------[2]---------[3]---------[4]---------[5]-----------[6]-------------[7]----------[8]-----------[9]-----------[10]-------------[11]-------[12]-----
	//.............3.60GB........3.65GB.....3.70GB.......3.75GB....3.80GB.......3.85GB........2.40GB..........1.60GB.......4.05GB.......4.35GB.........2.60GB...........8.75GB......
	await ns.write(files[0], "/** @param {NS} ns **/export async function main(ns) {var servers = ['n00dles','foodnstuff','sigma-cosmetics','hong-fang-tea','joesguns','harakiri-sushi'];var i=0;while(i<servers.length){if(servers.length>i)ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[1], "/** @param {NS} ns **/export async function main(ns) {var servers = ['CSEC','neo-net','zer0','max-hardware','iron-gym'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[2], "/** @param {NS} ns **/export async function main(ns) {var servers = ['phantasy','the-hub','avmnite-02h','omega-net','silver-helix'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[3], "/** @param {NS} ns **/export async function main(ns) {var servers = ['catalyst','summit-uni','netlink','I.I.I.I','rothman-uni','rho-construction','millenium-fitness'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[4], "/** @param {NS} ns **/export async function main(ns) {var servers = ['global-pharm','aevum-police','lexo-corp','alpha-ent','run4theh111z','unitalife','univ-energy'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[5], "/** @param {NS} ns **/export async function main(ns) {var servers = ['solaris','max-defcom','deltaone','galatic-cyber','omnia','aerocore'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.sqlinject(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[6], "/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('n00dles')>(ns.getServerMinSecurityLevel('n00dles')+2))await ns.weaken('n00dles');else if(ns.getServerMoneyAvailable('n00dles')<(ns.getServerMaxMoney('n00dles')*.9))await ns.grow('n00dles');else await ns.hack('n00dles');}", "w");
	await ns.write(files[7], "/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('alias root=run BruteSSH.exe;run FTPCrack.exe;run relaySMTP.exe;run HTTPworm.exe;run SQLInject.exe;run NUKE.exe;backdoor');ns.print('alias rebuy=buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; buy DeepscanV1.exe; buy DeepscanV2.exe; buy AutoLink.exe')}", "w");
	await ns.write(files[8], "/** @param {NS} ns **/export async function main(ns) {var i = 0;{while(i<25){ns.killall('xHx-'+i);await ns.scp('n00dleshack.js','xHx-'+i);ns.exec('n00dleshack.js','xHx-'+i,(ns.getServerMaxRam('xHx-'+i)/2.4));++i;}}}", "w");
	await ns.write(files[9],"/** @param {NS} ns **/export async function main(ns){ns.disableLog('ALL');var i = 0; while(i<25){ns.killall('xHx-' + i);ns.deleteServer('xHx-' + i);++i;}}","w");
	await ns.write(files[10],"/** @param {NS} ns **/export async function main(ns) {ns.run('upserv.js');}","w")
	await ns.write(files[11],"/** @param {NS} ns **/export async function main(ns) {ns.tail();var cost = [11000000,22000000,44000000,88000000,176000000,352000000,704000000,1408000000,2816000000,5632000000,11264000000,22258000000,45056000000,90112000000,180224000000,360448000000,720896000000,1441792000000];var ram = 8;var c = 0;var i = 0;var x = 0;for(x<cost.length;++x;)if(!ns.serverExists('xHx-24'))while(i<ns.getPurchasedServerLimit()){ns.purchaseServer('xHx-'+i,ram);await ns.scp('n00dleshack.js','xHx-'+i);ns.exec('n00dleshack.js','xHx-'+i,(ram/2.4));++i;}await ns.sleep(3000);++c;if(ns.serverExists('xHx-24')){while(ns.getServerMoneyAvailable('home')<cost[c]){await ns.sleep(6000);}ram*2;i=0;while(i<ns.getPurchasedServerLimit()){ns.killall('xHx-'+i);ns.deleteServer('xHx-'+i);ns.purchaseServer('xHx-'+i,ram);await ns.scp('n00dleshack.js','xHx-'+i);ns.exec('n00dleshack.js','xHx-'+i,(ram/2.4));++i;}await ns.sleep(3000);++c}}","w");
	await ns.write(files[12],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('Welcome to:  Meat me at the N00dle Shack! Here we have a problem. We need to automate the purchasing of servers until they are at the maximum available RAM. Our programmer is on vacation, and our script crashes the home computer. But we can not just shut down, there will be approx. 45 min. until the crashing script (upserv.js) will be automatically run. Be sure to upgrade home ram and buy all the hacks from darkweb in order of availabilty. !!  Can you fix it before then? !!');  }","w");
	
	
	
	await ns.sleep(3000);
	ns.run('intro.js');
	await ns.sleep(3000);
	ns.run('port0.js');
	await ns.sleep(3000);
	var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
	if(threads<0)var threads=1;
	ns.run('n00dleshack.js', threads);
	

	while (!ns.fileExists('BruteSSH.exe', 'home')) 
		{	ns.clearLog();ns.print('Go to City --> Alpha Ent. --> Buy Tor Router');ns.print('then buy BruteSSH.exe from darkweb');
			ns.print("Meanwhile: Fix/replace file 'upserv.js'");
			if (ns.getServerSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
			else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
			else await ns.hack('n00dles');

			var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
			if(threads<0)var threads=1;

			if(ns.getServerMaxRam('home')-20>(ns.getServerUsedRam('home')))
			ns.kill('n00dleshack.js','home');
			ns.run('n00dleshack.js', threads);
		}
ns.kill('n00dleshack.js','home');
ns.run('port1.js');
await ns.sleep(10000);

		
	while (!ns.fileExists('FTPCrack.exe', 'home')) 
		{	ns.clearLog();ns.print('Go to City --> Alpha Ent. --> Upgrade Home Ram');ns.print('then buy FTPCrack.exe from darkweb');
			ns.print("Meanwhile: Fix/replace file 'upserv.js'");
			if (ns.getServerSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
			else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
			else await ns.hack('n00dles');

			var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
			if(threads<0)var threads=1;
		
			if(ns.getServerMaxRam('home')-20>(ns.getServerUsedRam('home')))
			ns.kill('n00dleshack.js','home');
			ns.run('n00dleshack.js', threads);
		}
ns.kill('n00dleshack.js','home');	
ns.run('port2.js');
await ns.sleep(10000);
ns.run('n00dleshack.js', threads);
	
	while (!ns.fileExists('relaySMTP.exe', 'home')) 
		{	ns.clearLog();ns.print('Go to City --> Alpha Ent. --> Upgrade Home Ram');ns.print('then buy relaySMTP.exe from darkweb');
			ns.print('then go to City --> Alpha Ent. --> Upgrade Home Ram');ns.print("Meanwhile: Fix/replace file 'upserv.js'");
			if (ns.getServerSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
			else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
			else await ns.hack('n00dles');

			var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
			
		
			if(ns.getServerMaxRam('home')-20>(ns.getServerUsedRam('home')))
			{ns.kill('n00dleshack.js','home');
			ns.run('n00dleshack.js', threads);}
			while(ns.getServerMoneyAvailable('home')>11000000)
				if((ns.getServerMaxRam('home')>64)&&(!ns.fileExists('n00dleshack.js','xHx-0')))
				ns.run('upserv.js');
	}
ns.kill('n00dleshack.js','home');
ns.run('port3.js');
await ns.sleep(10000);
ns.run('n00dleshack.js',(Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2)));
	
	while (!ns.fileExists('HTTPWorm.exe', 'home')) 
		{
			if (ns.getServerSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
			else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
			else await ns.hack('n00dles');

			var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
		

			if(ns.getServerMaxRam('home')-20>(ns.getServerUsedRam('home')))
			{ns.kill('n00dleshack.js','home');
			ns.run('n00dleshack.js', threads);}

			if((ns.getServerMoneyAvailable('home')>11000000)&&(ns.getServerMaxRam('home')>32))
				ns.run('upserv.js');

	}
ns.kill('n00dleshack.js','home');
ns.run('port4.js');
await ns.sleep(10000);
ns.run('n00dleshack.js', threads);
	
	while (!ns.fileExists('SQLInject.exe', 'home')) {
		if (ns.getServerSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
		await ns.weaken('n00dles');
		else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
		await ns.grow('n00dles');
		else await ns.hack('n00dles');

		var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
		
		
		if(ns.getServerMaxRam('home')-20>(ns.getServerUsedRam('home')))
		{ns.kill('n00dleshack.js','home');
		ns.run('n00dleshack.js', threads);}

		if((ns.getServerMoneyAvailable('home')>11000000)&&(ns.getServerMaxRam('home')>32))
			ns.run('upserv.js');
	}
ns.kill('n00dleshack.js','home');
ns.run('port5.js');

var threads = (Math.floor(((ns.getServerMaxRam('home') - 12) / 2.4)-2));
ns.run('n00dleshack.js', threads);
ns.run('launchupserv.js');
ns.exit
}
