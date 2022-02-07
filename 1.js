/** @param {NS} ns **/export async function main(ns) {

//welcome. 'port0' referes to servers with zero ports to open. all servers attack n00dles,until you modify it. aliases typed/paste in the terminal require " ". 
//	there's a lot of copy/paste that should be in an array. starting from fresh, this script gets to purchace brutessh.exe in 9 minutes but user must manually go shopping - recommended take course at uni.
// purchsae upgrades(tor/home) and darkweb tools as soon as available, factions, user choice. mission:create/write the missing script. you have until you purchase SQLInject.exe.

	var files = ['port0.js', 'port1.js', 'port2.js', 'port3.js', 'port4.js', 'port5.js', 'n00dleshack.js', 'alias.js', 'pushserv.js','delserv.js','launchupserv.js','upserv.js'];
	//---------------[0]---------[1]---------[2]---------[3]---------[4]---------[5]-----------[6]-------------[7]----------[8]-----------[9]-----------[10]--------------
	
	await ns.write(files[0], "/** @param {NS} ns **/export async function main(ns) {var servers = ['n00dles','foodnstuff','sigma-cosmetics','hong-fang-tea','joesguns','harakiri-sushi'];var i=0;while(i<servers.length){if(servers.length>i)ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[1], "/** @param {NS} ns **/export async function main(ns) {var servers = ['neo-net','zer0','max-hardware','iron-gym'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[2], "/** @param {NS} ns **/export async function main(ns) {var servers = ['phantasy','the-hub','avmnite-02h','omega-net','silver-helix'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[3], "/** @param {NS} ns **/export async function main(ns) {var servers = ['catalyst','summit-uni','netlink','I.I.I.I','rothman-uni','rho-construction','millenium-fitness'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[4], "/** @param {NS} ns **/export async function main(ns) {var servers = ['global-pharm','aevum-police','lexo-corp','alpha-ent','run4theh111z','unitalife','univ-energy'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[5], "/** @param {NS} ns **/export async function main(ns) {var servers = ['solaris','infocom','max-defcom','deltaone','galatic-cyber','zeus-med','icarus','omnia','aerocore'];var i=0;while(i<servers.length){if(servers.length>i)ns.brutessh(servers[i]);ns.ftpcrack(servers[i]);ns.relaysmtp(servers[i]);ns.httpworm(servers[i]);ns.sqlinject(servers[i]);ns.nuke(servers[i]);await ns.scp('n00dleshack.js',servers[i]);ns.exec('n00dleshack.js',servers[i],(Math.floor(ns.getServerMaxRam(servers[i])/2.4)));++i;}}", "w");
	await ns.write(files[6], "/** @param {NS} ns **/export async function main(ns) {while(true)if(ns.getServerSecurityLevel('n00dles')>(ns.getServerMinSecurityLevel('n00dles')+2))await ns.weaken('n00dles');else if(ns.getServerMoneyAvailable('n00dles')<(ns.getServerMaxMoney('n00dles')*.9))await ns.grow('n00dles');else await ns.hack('n00dles');}", "w");
	await ns.write(files[7], "/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('alias root=run BruteSSH.exe;run FTPCrack.exe;run relaySMTP.exe;run HTTPworm.exe;run SQLInject.exe;run NUKE.exe;backdoor');ns.print('alias rebuy=buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; buy DeepscanV1.exe; buy DeepscanV2.exe; buy AutoLink.exe')}", "w");
	await ns.write(files[8], "/** @param {NS} ns **/export async function main(ns) {var i = 0;{while(i<25){ns.killall('xHx-'+i);await ns.scp('n00dleshack.js','xHx-'+i);ns.exec('n00dleshack.js','xHx-'+i,(ns.getServerMaxRam('xHx-'+i)/2.4));++i;}}}", "w");
	await ns.write(files[9],"/** @param {NS} ns **/export async function main(ns){ns.disableLog('ALL');var i = 0; while(i<25){ns.killall('xHx-' + i);ns.deleteServer('xHx-' + i);++i;}}","w");
	await ns.write(files[10],"/** @param {NS} ns **/export async function main(ns) {ns.run('upserv.js');}","w")
	await ns.write(files[11],"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('make program to upgrade purchased servers from 8GB incrementing to maxGB, the program will be launched by launchupserv.js when you reach 11 million $ after the purchase of SQLInject. User is allotted 12GB on home server which will also accomodate launchupserv.js/pushserv.js unless not needed.","w");


	ns.run('port0.js');
	await ns.sleep(3000);
	if (ns.getServerMaxRam('home') == 16) { ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 64) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 128) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 256) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 512) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 1024) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 2048) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 4096) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 8192) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 16384) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32768) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 65536) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 131072) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }


	if (ns.getServerMinSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
		await ns.weaken('n00dles');
	else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
		await ns.grow('n00dles');
	else await ns.hack('n00dles');

	await ns.sleep(5000);

	while (!ns.fileExists('BruteSSH.exe', 'home')) {
		if (ns.getServerMinSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
		else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
		else await ns.hack('n00dles');
	}
	await ns.sleep(5000);
	{ ns.run('port1.js'); }
	if (ns.getServerMaxRam('home') == 16) { ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 64) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 128) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 256) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 512) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 1024) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 2048) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 4096) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 8192) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 16384) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32768) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 65536) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 131072) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	await ns.sleep(5000);
	while (!ns.fileExists('FTPCrack.exe', 'home')) {
		if (ns.getServerMinSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
		else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
		else await ns.hack('n00dles');
	}
	await ns.sleep(5000);
	{ ns.run('port2.js'); }
	if (ns.getServerMaxRam('home') == 16) { ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 64) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 128) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 256) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 512) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 1024) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 2048) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 4096) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 8192) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 16384) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32768) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 65536) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 131072) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }

	await ns.sleep(5000);
	while (!ns.fileExists('relaySMTP.exe', 'home')) {
		if (ns.getServerMinSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
		else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
		else await ns.hack('n00dles');
	}
	await ns.sleep(5000);
	{ ns.run('port3.js'); }
	await ns.sleep(5000);
	while (!ns.fileExists('HTTPWorm.exe', 'home')) {
		if (ns.getServerMinSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
		else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
		else await ns.hack('n00dles');


	}
	await ns.sleep(5000);
	{ ns.run('port4.js'); }
	if (ns.getServerMaxRam('home') == 16) { ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 64) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 128) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 256) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 512) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 1024) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 2048) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 4096) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 8192) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 16384) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32768) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 65536) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 131072) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }

	await ns.sleep(5000);
	while (!ns.fileExists('SQLInject.exe', 'home')) {
		if (ns.getServerMinSecurityLevel('n00dles') > (ns.getServerMinSecurityLevel('n00dles') + 2))
			await ns.weaken('n00dles');
		else if (ns.getServerMoneyAvailable('n00dles') < (ns.getServerMaxMoney('n00dles') * .9))
			await ns.grow('n00dles');
		else await ns.hack('n00dles');
	}
	await ns.sleep(5000);
	{ ns.run('port5.js'); }
	if (ns.getServerMaxRam('home') == 16) { ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 64) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 128) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 256) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 512) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 1024) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 2048) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 4096) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 8192) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 16384) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 32768) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 65536) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }
	else if (ns.getServerMaxRam('home') == 131072) { ns.kill('n00dleshack.js', 'home'); ns.run('n00dleshack.js', (Math.floor((ns.getServerMaxRam('home') - 12) / 2.4))); }


if(getServerMoneyAvailable('home')>11000000 && !ns.fileExists('n00dleshack.js','xHx-24'))
{
	ns.run('launchupserv.js');
	ns.exit	
}
}
