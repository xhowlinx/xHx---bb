/** @param {NS} ns **/
export async function main(ns) {
	//ns.tail();



	var hackFiles = ['wLoop.script', 'gLoop.script', 'hLoop.script', 'ws.script', 'gs.script', 'hs.script'];
	//...................[0]............[1]............[2]...............[3]..........[4]..........[5].............
	//..................(1.75GB).......(1.75).........(1.70).............(1.75)......(1.75).......(1.70)................................
	await ns.write(hackFiles[0], "while(true){weaken(args);}", 'w');
	await ns.write(hackFiles[1], "while(true){grow(args);}", 'w');
	await ns.write(hackFiles[2], "while(true){if(getServerMoneyAvailable(args)==(getServerMaxMoney(args))) hack(args);}", 'w');
	await ns.write('ws.script', 'weaken(args)', 'w');
	await ns.write('gs.script', 'grow(args)', 'w');
	await ns.write('hs.script', 'hack(args)', 'w');
	await ns.write('healthMonitor.js', "/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.disableLog('ALL');while(true){ns.clearLog();ns.print('Server  : Vitality  (Sec.Lvl:)');ns.print('home       : ',Math.floor(((ns.getServerMoneyAvailable('home'   ))*100)/100000000000),' % :',' $ ',Math.fround(ns.getServerMoneyAvailable('home'   )));ns.print('n00dles    : ',Math.floor(((ns.getServerMoneyAvailable('n00dles'))*100)/ns.getServerMaxMoney('n00dles')     ),' %    (',Math.round(ns.getServerSecurityLevel('n00dles')),' / ',ns.getServerMinSecurityLevel('n00dles'), ')');ns.print('fnstuff    : ',Math.floor(((ns.getServerMoneyAvailable('foodnstuff'))*100)/ns.getServerMaxMoney('foodnstuff')     ),' %    (',Math.round(ns.getServerSecurityLevel('foodnstuff')),' / ',ns.getServerMinSecurityLevel('foodnstuff'), ')');ns.print('sigma-c    : ',Math.floor(((ns.getServerMoneyAvailable('sigma-cosmetics'))*100)/ns.getServerMaxMoney('sigma-cosmetics')     ),' %    (',Math.round(ns.getServerSecurityLevel('sigma-cosmetics')),' / ',ns.getServerMinSecurityLevel('sigma-cosmetics'), ')');ns.print('joeguns    : ',Math.floor(((ns.getServerMoneyAvailable('joesguns'))*100)/ns.getServerMaxMoney('joesguns')     ),' %    (',Math.round(ns.getServerSecurityLevel('joesguns')),' / ',ns.getServerMinSecurityLevel('joesguns'), ')');ns.print('h-f-tea    : ',Math.floor(((ns.getServerMoneyAvailable('hong-fang-tea'))*100)/ns.getServerMaxMoney('hong-fang-tea')     ),' %    (',Math.round(ns.getServerSecurityLevel('hong-fang-tea')),' / ',ns.getServerMinSecurityLevel('hong-fang-tea'), ')');ns.print('h-sushi    : ',Math.floor(((ns.getServerMoneyAvailable('harakiri-sushi'))*100)/ns.getServerMaxMoney('harakiri-sushi')     ),' %    (',Math.round(ns.getServerSecurityLevel('harakiri-sushi')),' / ',ns.getServerMinSecurityLevel('harakiri-sushi'), ')');ns.print('nec-net    : ',Math.floor(((ns.getServerMoneyAvailable('nectar-net'))*100)/ns.getServerMaxMoney('nectar-net')     ),' %    (',Math.round(ns.getServerSecurityLevel('nectar-net')),' / ',ns.getServerMinSecurityLevel('nectar-net'), ')');await ns.sleep(.420);}}", 'w');
	var pServFiles = ['deleteServer.js', 'purchaseServer.js', 'purchaseServerUpgrade.js', 'pushServ.js', 'stats.js', 'alias.js'];
	//.......................[0]..............[1].......................[2]....................[3]............[4].........[5]..........
	//.....................(6.60GB)..........(8.20)....................(9.10).................(4.10).........(2.00)......(1.6GB).......
	await ns.write('deleteServer.js', "/** @param {NS} ns **/export async function main(ns) {var currentServers = ns.getPurchasedServers();for (var i = 0; i < currentServers.length; ++i) {var serv = currentServers[i];ns.killall(serv);ns.deleteServer(serv);}}", 'w');
//	await ns.write('purchaseServer.js', "/** @param {NS} ns **/export async function main(ns) {var ram = 32;var i = 0;while (ns.getServerMoneyAvailable('home') < ns.getPurchasedServerCost(ram)*25) {await ns.hack('n00dles');}while (i < 25) {var hostname = ns.purchaseServer('xHx-' + i, ram);ns.tprint('buying ', hostname, ' @ ', ram, 'GB for $', ns.getPurchasedServerCost(ram));await ns.scp('gLoop.script', hostname);await ns.scp('wLoop.script', hostname);ns.exec('gLoop.script', hostname, ((ram / 1.75)/4), 'n00dles');ns.exec('wLoop.script', hostname, ((ram / 1.75)/4), 'n00dles');ns.exec('gLoop.script', hostname, ((ram / 1.75)/4), 'joesguns');ns.exec('wLoop.script', hostname, ((ram / 1.75)/4), 'joesguns');++i;await ns.hack('n00dles');}ns.spawn('purchaseServerUpgrade.js')}", 'w');
//	await ns.write('purchaseServerUpgrade.js', "/** @param {NS} ns **/export async function main(ns) {while (true) {var ram = (ns.getServerMaxRam('xHx-24') * 2);ns.print(ram);var i = 0;while (ns.getServerMoneyAvailable('home') < ns.getPurchasedServerCost(ram)*25) {await ns.hack('n00dles');}while (i < ns.getPurchasedServerLimit()) {ns.killall('xHx-' + i);ns.clearLog();ns.deleteServer('xHx-' + i);var hostname = ns.purchaseServer('xHx-' + i, ram);ns.tprint('upgrading ', hostname, ' to ', ram, 'GB for $',ns.getPurchasedServerCost(ram));var h = 0;var hackFiles = ['wLoop.script', 'gLoop.script'];var s = 0;var servers = hostname;var t = 0;var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi'];if(ns.getServerMaxRam('home')<=1024){var target=['n00dles','joesguns'];}var threads = ((ns.getServerMaxRam(servers) / target.length) / 2) / 2;{servers = hostname;await ns.scp(hackFiles, servers);ns.killall(servers);if (ns.getHackingLevel() > 600) { var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym']; }if (ns.getHackingLevel() > 800) { var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix']; }if (ns.getHackingLevel() > 1000) { var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness']; }if (ns.getHackingLevel() > 1200) { var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness', 'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent', 'unitalife', 'univ-energy']; }if (ns.getHackingLevel() > 1400) { var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness', 'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent',  'unitalife', 'univ-energy', 'solaris', 'omnia', 'zb-institute', 'microdyne', 'titan-labs', 'blade', 'fulcrumtech', 'powerhouse-fitness']; }var threads = ((ns.getServerMaxRam(servers) / target.length) / 1.75) / 2;for (h = 0; h < hackFiles.length; ++h) {for (t = 0; t < target.length; ++t) { ns.exec(hackFiles[h], servers, threads, target[t]); }}await ns.hack('n00dles');}++i;await ns.hack('n00dles');}}}", 'w');
	await ns.write('stats.js',"/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.disableLog('ALL');while(true){ns.clearLog();ns.print('Server  : Vitality  (Sec.Lvl:)');ns.print('------------------------------');ns.print('home       : ',Math.floor(((ns.getServerMoneyAvailable('home'   ))*100)/100000000000),' % :',' $ ',Math.floor(ns.getServerMoneyAvailable('home')),'.00');ns.print('n00dles    : ',Math.floor(((ns.getServerMoneyAvailable('n00dles'))*100)/ns.getServerMaxMoney('n00dles')     ),' %    (',Math.round(ns.getServerSecurityLevel('n00dles')),' / ',ns.getServerMinSecurityLevel('n00dles'), ')');ns.print('joesguns   : ',Math.floor(((ns.getServerMoneyAvailable('joesguns'))*100)/ns.getServerMaxMoney('joesguns')     ),' %    (',Math.round(ns.getServerSecurityLevel('joesguns')),' / ',ns.getServerMinSecurityLevel('joesguns'), ')');ns.print('-----------------------');ns.print('homeRam>or=1024');ns.print('-----------------------');ns.print('fnstuff    : ',Math.floor(((ns.getServerMoneyAvailable('foodnstuff'))*100)/ns.getServerMaxMoney('foodnstuff')     ),' %    (',Math.round(ns.getServerSecurityLevel('foodnstuff')),' / ',ns.getServerMinSecurityLevel('foodnstuff'), ')');ns.print('sigma-c    : ',Math.floor(((ns.getServerMoneyAvailable('sigma-cosmetics'))*100)/ns.getServerMaxMoney('sigma-cosmetics')     ),' %    (',Math.round(ns.getServerSecurityLevel('sigma-cosmetics')),' / ',ns.getServerMinSecurityLevel('sigma-cosmetics'), ')');ns.print('h-f-tea    : ',Math.floor(((ns.getServerMoneyAvailable('hong-fang-tea'))*100)/ns.getServerMaxMoney('hong-fang-tea')     ),' %    (',Math.round(ns.getServerSecurityLevel('hong-fang-tea')),' / ',ns.getServerMinSecurityLevel('hong-fang-tea'), ')');ns.print('h-sushi    : ',Math.floor(((ns.getServerMoneyAvailable('harakiri-sushi'))*100)/ns.getServerMaxMoney('harakiri-sushi')     ),' %    (',Math.round(ns.getServerSecurityLevel('harakiri-sushi')),' / ',ns.getServerMinSecurityLevel('harakiri-sushi'), ')');ns.print('nectar-net : ',Math.floor(((ns.getServerMoneyAvailable('nectar-net'))*100)/ns.getServerMaxMoney('nectar-net')     ),' %    (',Math.round(ns.getServerSecurityLevel('nectar-net')),' / ',ns.getServerMinSecurityLevel('nectar-net'), ')');ns.print('-----------------------');ns.print('hacklevel => 600');ns.print('-----------------------');ns.print('max-hdw    : ',Math.floor(((ns.getServerMoneyAvailable('max-hardware'))*100)/ns.getServerMaxMoney('max-hardware')     ),' %    (',Math.round(ns.getServerSecurityLevel('max-hardware')),' / ',ns.getServerMinSecurityLevel('max-hardware'), ')');ns.print('neo-net    : ',Math.floor(((ns.getServerMoneyAvailable('neo-net'))*100)/ns.getServerMaxMoney('neo-net')     ),' %    (',Math.round(ns.getServerSecurityLevel('neo-net')),' / ',ns.getServerMinSecurityLevel('neo-net'), ')');ns.print('zer0       : ',Math.floor(((ns.getServerMoneyAvailable('zer0'))*100)/ns.getServerMaxMoney('zer0')     ),' %    (',Math.round(ns.getServerSecurityLevel('zer0')),' / ',ns.getServerMinSecurityLevel('zer0'), ')');ns.print('iron-gym   : ',Math.floor(((ns.getServerMoneyAvailable('iron-gym'))*100)/ns.getServerMaxMoney('iron-gym')     ),' %    (',Math.round(ns.getServerSecurityLevel('iron-gym')),' / ',ns.getServerMinSecurityLevel('iron-gym'), ')');ns.print('-----------------------');ns.print('hackingLevel => 800');ns.print('-----------------------');ns.print('phantasy   : ',Math.floor(((ns.getServerMoneyAvailable('phantasy'))*100)/ns.getServerMaxMoney('phantasy')     ),' %    (',Math.round(ns.getServerSecurityLevel('phantasy')),' / ',ns.getServerMinSecurityLevel('phantasy'), ')');ns.print('the-hub    : ',Math.floor(((ns.getServerMoneyAvailable('the-hub'))*100)/ns.getServerMaxMoney('the-hub')     ),' %    (',Math.round(ns.getServerSecurityLevel('the-hub')),' / ',ns.getServerMinSecurityLevel('the-hub'), ')');ns.print('omega-net  : ',Math.floor(((ns.getServerMoneyAvailable('omega-net'))*100)/ns.getServerMaxMoney('omega-net')     ),' %    (',Math.round(ns.getServerSecurityLevel('omega-net')),' / ',ns.getServerMinSecurityLevel('omega-net'), ')');ns.print('s-helix    : ',Math.floor(((ns.getServerMoneyAvailable('silver-helix'))*100)/ns.getServerMaxMoney('silver-helix')     ),' %    (',Math.round(ns.getServerSecurityLevel('silver-helix')),' / ',ns.getServerMinSecurityLevel('silver-helix'), ')');ns.print('-----------------------');ns.print('hackingLevel => 1000');ns.print('-----------------------');ns.print('catalyst   : ',Math.floor(((ns.getServerMoneyAvailable('catalyst'))*100)/ns.getServerMaxMoney('catalyst')     ),' %    (',Math.round(ns.getServerSecurityLevel('catalyst')),' / ',ns.getServerMinSecurityLevel('catalyst'), ')');ns.print('summit-uni : ',Math.floor(((ns.getServerMoneyAvailable('summit-uni'))*100)/ns.getServerMaxMoney('summit-uni')     ),' %    (',Math.round(ns.getServerSecurityLevel('summit-uni')),' / ',ns.getServerMinSecurityLevel('summit-uni'), ')');ns.print('netlink    : ',Math.floor(((ns.getServerMoneyAvailable('netlink'))*100)/ns.getServerMaxMoney('netlink')     ),' %    (',Math.round(ns.getServerSecurityLevel('netlink')),' / ',ns.getServerMinSecurityLevel('netlink'), ')');ns.print('rman-uni   : ',Math.floor(((ns.getServerMoneyAvailable('rothman-uni'))*100)/ns.getServerMaxMoney('rothman-uni')     ),' %    (',Math.round(ns.getServerSecurityLevel('rothman-uni')),' / ',ns.getServerMinSecurityLevel('rothman-uni'), ')');ns.print('rho-const  : ',Math.floor(((ns.getServerMoneyAvailable('rho-construction'))*100)/ns.getServerMaxMoney('rho-construction')     ),' %    (',Math.round(ns.getServerSecurityLevel('rho-construction')),' / ',ns.getServerMinSecurityLevel('rho-construction'), ')');ns.print('m-fitness  : ',Math.floor(((ns.getServerMoneyAvailable('millenium-fitness'))*100)/ns.getServerMaxMoney('millenium-fitness')     ),' %    (',Math.round(ns.getServerSecurityLevel('millenium-fitness')),' / ',ns.getServerMinSecurityLevel('millenium-fitness'), ')');ns.print('-----------------------');ns.print('hackingLevel => 1200');ns.print('-----------------------');ns.print('g-pharm    : ',Math.floor(((ns.getServerMoneyAvailable('global-pharm'))*100)/ns.getServerMaxMoney('global-pharm')     ),' %    (',Math.round(ns.getServerSecurityLevel('global-pharm')),' / ',ns.getServerMinSecurityLevel('global-pharm'), ')');ns.print('a-police   : ',Math.floor(((ns.getServerMoneyAvailable('aevum-police'))*100)/ns.getServerMaxMoney('aevum-police')     ),' %    (',Math.round(ns.getServerSecurityLevel('aevum-police')),' / ',ns.getServerMinSecurityLevel('aevum-police'), ')');ns.print('lex-corp   : ',Math.floor(((ns.getServerMoneyAvailable('lexo-corp'))*100)/ns.getServerMaxMoney('lexo-corp')     ),' %    (',Math.round(ns.getServerSecurityLevel('lexo-corp')),' / ',ns.getServerMinSecurityLevel('lexo-corp'), ')');ns.print('alpha-ent  : ',Math.floor(((ns.getServerMoneyAvailable('alpha-ent'))*100)/ns.getServerMaxMoney('alpha-ent')     ),' %    (',Math.round(ns.getServerSecurityLevel('alpha-ent')),' / ',ns.getServerMinSecurityLevel('alpha-ent'), ')');ns.print('r4thh1z    : ',Math.floor(((ns.getServerMoneyAvailable('run4theh111z'))*100)/ns.getServerMaxMoney('run4theh111z')     ),' %    (',Math.round(ns.getServerSecurityLevel('run4theh111z')),' / ',ns.getServerMinSecurityLevel('run4theh111z'), ')');ns.print('unilife    : ',Math.floor(((ns.getServerMoneyAvailable('unitalife'))*100)/ns.getServerMaxMoney('unitalife')     ),' %    (',Math.round(ns.getServerSecurityLevel('unitalife')),' / ',ns.getServerMinSecurityLevel('unitalife'), ')');ns.print('u-energy   : ',Math.floor(((ns.getServerMoneyAvailable('univ-energy'))*100)/ns.getServerMaxMoney('univ-energy')     ),' %    (',Math.round(ns.getServerSecurityLevel('univ-energy')),' / ',ns.getServerMinSecurityLevel('univ-energy'), ')');ns.print('  .        : ',Math.floor(((ns.getServerMoneyAvailable('.'))*100)/ns.getServerMaxMoney('.')     ),' %    (',Math.round(ns.getServerSecurityLevel('.')),' / ',ns.getServerMinSecurityLevel('.'), ')');ns.print('-----------------------');ns.print('hackinglevel => 1400');ns.print('-----------------------');ns.print('solaris    : ',Math.floor(((ns.getServerMoneyAvailable('solaris'))*100)/ns.getServerMaxMoney('solaris')     ),' %    (',Math.round(ns.getServerSecurityLevel('solaris')),' / ',ns.getServerMinSecurityLevel('solaris'), ')');ns.print('omnia      : ',Math.floor(((ns.getServerMoneyAvailable('omnia'))*100)/ns.getServerMaxMoney('omnia')     ),' %    (',Math.round(ns.getServerSecurityLevel('omnia')),' / ',ns.getServerMinSecurityLevel('omnia'), ')');ns.print('zb-instute : ',Math.floor(((ns.getServerMoneyAvailable('zb-institute'))*100)/ns.getServerMaxMoney('zb-institute')     ),' %    (',Math.round(ns.getServerSecurityLevel('zb-institute')),' / ',ns.getServerMinSecurityLevel('zb-institute'), ')');ns.print('microdyne  : ',Math.floor(((ns.getServerMoneyAvailable('microdyne'))*100)/ns.getServerMaxMoney('microdyne')     ),' %    (',Math.round(ns.getServerSecurityLevel('microdyne')),' / ',ns.getServerMinSecurityLevel('microdyne'), ')');ns.print('titan-labs : ',Math.floor(((ns.getServerMoneyAvailable('titan-labs'))*100)/ns.getServerMaxMoney('titan-labs')     ),' %    (',Math.round(ns.getServerSecurityLevel('titan-labs')),' / ',ns.getServerMinSecurityLevel('titan-labs'), ')');ns.print('blade      : ',Math.floor(((ns.getServerMoneyAvailable('blade'))*100)/ns.getServerMaxMoney('blade')     ),' %    (',Math.round(ns.getServerSecurityLevel('blade')),' / ',ns.getServerMinSecurityLevel('blade'), ')');ns.print('fulcrtech  : ',Math.floor(((ns.getServerMoneyAvailable('fulcrumtech'))*100)/ns.getServerMaxMoney('fulcrumtech')     ),' %    (',Math.round(ns.getServerSecurityLevel('fulcrumtech')),' / ',ns.getServerMinSecurityLevel('fulcrumtech'), ')');ns.print('ph-fitness : ',Math.floor(((ns.getServerMoneyAvailable('powerhouse-fitness'))*100)/ns.getServerMaxMoney('powerhouse-fitness')     ),' %    (',Math.round(ns.getServerSecurityLevel('powerhouse-fitness')),' / ',ns.getServerMinSecurityLevel('powerhouse-fitness'), ')');ns.print('----^^^^  scroll up  ^^^^----');ns.print('go:options>increase netscript log size to at least = 60');await ns.sleep(.420);}}",'w');
	await ns.write('killall.script', "killall(args)", 'w');
	await ns.write('alias.js', "/** @param {NS} ns **/export async function main(ns) {ns.tail();ns.print('alias root=run BruteSSH.exe;run FTPCrack.exe;run relaySMTP.exe;run HTTPworm.exe;run SQLInject.exe;run NUKE.exe;backdoor');ns.print('alias rebuy=buy BruteSSH.exe; buy FTPCrack.exe; buy relaySMTP.exe; buy HTTPWorm.exe; buy SQLInject.exe; buy DeepscanV1.exe; buy DeepscanV2.exe; buy AutoLink.exe');ns.print('alias kill=killall;run killall.script')}", 'w');
//	await ns.write('pushServ.js', "/** @param {NS} ns **/export async function main(ns) {var h = 0; var hackFiles = ['wLoop.script', 'gLoop.script'];var s = 0; var servers = ('xHx-' + s); var t = 0;var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi'];if (ns.getServerMaxRam('home') <= 1024) { var target = ['n00dles', 'joesguns']; }var threads = ((ns.getServerMaxRam(servers) / target.length) / 2) / 2;{while (s < 25) {servers = ('xHx-' + s);await ns.scp(hackFiles, servers);ns.killall(servers);if (ns.getHackingLevel() > 599) {var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym'];}if (ns.getHackingLevel() > 800) {var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix'];}if (ns.getHackingLevel() > 1000) {var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness'];}if (ns.getHackingLevel() > 1200) {var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness', 'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent', 'unitalife', 'univ-energy'];}if (ns.getHackingLevel() > 1400) {var target = ['n00dles', 'foodnstuff', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness', 'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent', , 'unitalife', 'univ-energy', 'solaris', 'omnia', 'zb-institute', 'microdyne', 'titan-labs', 'blade', 'fulcrumtech', 'powerhouse-fitness'];}var threads = ((ns.getServerMaxRam(servers) / target.length) / 2) / 2;for (h = 0; h < hackFiles.length; ++h) {for (t = 0; t < target.length; ++t) {ns.exec(hackFiles[h], servers, threads, target[t]);}}await ns.sleep(420);++s;}}}", 'w');
	
	var target = ['n00dles'];//,'foodnstuff','nectar-net','sigma-cosmetics','hong-fang-tea','joesguns','harakiri-sushi'];
	var t = 0;
	
	var servers = ['n00dles', 'nectar-net', 'sigma-cosmetics', 'hong-fang-tea', 'joesguns', 'harakiri-sushi',
		'CSEC', 'neo-net', 'zer0', 'max-hardware', 'iron-gym',
		'phantasy', 'the-hub', 'avmnite-02h', 'omega-net', 'silver-helix',
		'catalyst', 'summit-uni', 'netlink', 'I.I.I.I', 'rothman-uni', 'rho-construction', 'millenium-fitness',
		'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent', 'run4theh111z', 'unitalife', 'univ-energy', '.',
		'solaris', 'omnia', 'zb-institute', 'microdyne', 'titan-labs', 'blade', 'fulcrumtech', 'powerhouse-fitness'];
	var s = 0;
	
	var ram = ns.getServerMaxRam('home');
	
	
	ns.nuke('foodnstuff');
	await ns.scp(pServFiles, 'foodnstuff'); await ns.scp(hackFiles, 'foodnstuff');
	ns.exec('killall.script', 'foodnstuff'); await ns.sleep(8192);
	if (ns.serverExists('xHx-24')) { ns.exec('pushServ.js', 'foodnstuff'); }
	if (!ns.serverExists('xHx-24')) { ns.exec('deleteServer.js', 'foodnstuff'); await ns.sleep(4096); ns.exec('purchaseServer.js', 'foodnstuff'); }
	if (!ns.scriptRunning('purchaseServer.js', 'foodnstuff') && ns.serverExists('xHx-24')) { ns.exec('purchaseServerUpgrade.js', 'foodnstuff'); }
	ns.exec('stats.js', 'foodnstuff')
	
	while (true) {
		s = 0;
		
		while (s < servers.length) {
			if(ram<=1024){var target=['n00dles','joesguns'];}

			else var target = ['n00dles',  'foodnstuff',  'sigma-cosmetics','joesguns', 'hong-fang-tea', 'harakiri-sushi','nectar-net'];
			if (ns.getHackingLevel() > 600) {
				var target = ['n00dles', 'foodnstuff',  'sigma-cosmetics', 'joesguns','hong-fang-tea',  'harakiri-sushi', 'nectar-net','neo-net', 'zer0', 'max-hardware', 'iron-gym'];
			}
			if (ns.getHackingLevel() > 800) {
				var target = ['n00dles', 'foodnstuff',  'sigma-cosmetics', 'joesguns','hong-fang-tea',  'harakiri-sushi','nectar-net', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix'];
			}
			if (ns.getHackingLevel() > 1000) {
				var target = ['n00dles', 'foodnstuff',  'sigma-cosmetics', 'joesguns','hong-fang-tea',  'harakiri-sushi', 'nectar-net','neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness'];
			}
			if (ns.getHackingLevel() > 1200) {
				var target = ['n00dles', 'foodnstuff','sigma-cosmetics',  'joesguns','hong-fang-tea', 'harakiri-sushi', 'nectar-net',  'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness', 'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent', 'unitalife', 'univ-energy'];
			}
			if (ns.getHackingLevel() > 1400) {
				var target = ['n00dles', 'foodnstuff',  'sigma-cosmetics', 'joesguns','hong-fang-tea',  'harakiri-sushi','nectar-net', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'the-hub', 'omega-net', 'silver-helix', 'catalyst', 'summit-uni', 'netlink', 'rothman-uni', 'rho-construction', 'millenium-fitness', 'global-pharm', 'aevum-police', 'lexo-corp', 'alpha-ent', , 'unitalife', 'univ-energy', 'solaris', 'omnia', 'zb-institute', 'microdyne', 'titan-labs', 'blade', 'fulcrumtech', 'powerhouse-fitness'];
			}


			t = 0;
			for (let server of servers) {
				var homehLthreads = Math.floor(((ns.getServerMaxRam('home') / 1.7)) / servers.length);
				if (homehLthreads <= 1) { ++homehLthreads; }
				let openPorts = 0;
				if (ns.fileExists("BruteSSH.exe")) { ns.brutessh(server); ++openPorts; }
				if (ns.fileExists("FTPCrack.exe")) { ns.ftpcrack(server); ++openPorts; }
				if (ns.fileExists("RelaySMTP.exe")) { ns.relaysmtp(server); ++openPorts; }
				if (ns.fileExists("HTTPWorm.exe")) { ns.httpworm(server); ++openPorts; }
				if (ns.fileExists("SQLInject.exe")) { ns.sqlinject(server); ++openPorts; }
				if (ns.getServerNumPortsRequired(server) <= openPorts) {
					ns.nuke(server);
					await ns.scp(hackFiles, server);
				}
			}


			while (t < target.length) {
				if (ns.getServerRequiredHackingLevel(target[t]) <= ns.getHackingLevel()) {

					var gLthreads = Math.floor((ns.getServerMaxRam(servers[s]) / target.length) / 1.75);
					if (gLthreads <= 1) { ++gLthreads; }

					var hLthreads = Math.floor((ns.getServerMaxRam(servers[s]) / target.length) / 1.90);
					if (hLthreads <= 1) { ++hLthreads; }

					var hsthreads = Math.floor((ns.getServerMaxRam(servers[s]) / target.length) / 1.7);
					if (hsthreads <= 1) { ++hsthreads; }

					var homegLthreads = Math.floor(((ns.getServerMaxRam('home') / target.length) / 1.75) );
					if (homegLthreads <= 1) { ++homegLthreads; }

					var homehLthreads = Math.floor((ns.getServerMaxRam('home') / target.length) / 1.90);
					if (homehLthreads <= 1) { ++homehLthreads; }

					var homehsthreads = Math.floor((ns.getServerMaxRam('home') / target.length) / 1.7);
					if (homehsthreads <= 1) { ++homehsthreads; }

					if(t==0 && homehLthreads>=200)homehLthreads=200;
					if(t==1 && homehLthreads>=225)homehLthreads=225;
					if(t==2 && homehLthreads>=300)homehLthreads=300;
					if(t==3 && homehLthreads>=275)homehLthreads=275;
					if(t==4 && homehLthreads>=300)homehLthreads=300;
					if(t==5 && homehLthreads>=300)homehLthreads=300;
					if(t==6 && homehLthreads>=300)homehLthreads=300;
					

					ns.exec('gLoop.script', (servers[s]), 1, target[t]);
					ns.exec('wLoop.script', (servers[s]), 1, target[t]);
					if (ns.getServerMoneyAvailable(target[t]) == (ns.getServerMaxMoney(target[t]) )) 
					{ ns.exec('hLoop.script', 'home', homehLthreads, target[t]); }
					if (ns.getServerMoneyAvailable(target[t]) < (ns.getServerMaxMoney(target[t]))*.99) {
						ns.exec('gs.script', 'home', homegLthreads, target[t]);
					}

					var targetGWsThreads = Math.floor(((ns.getServerMaxRam(target[t]) - ns.getServerUsedRam(target[t])) / 1.75) / target.length);
					if (targetGWsThreads <= 1) { ++targetGWsThreads; }
					var targetHsThreads = Math.floor(((ns.getServerMaxRam(target[t]) - ns.getServerUsedRam(target[t])) / 1.7) / target.length);
					if (targetHsThreads <= 1) { ++targetHsThreads; }


					if (ns.getServerSecurityLevel(target[t]) > (ns.getServerMinSecurityLevel(target[t]) + .8192)) {
						ns.exec('ws.script', servers[s], gLthreads, target[t]);
						ns.exec('ws.script', target[t], targetGWsThreads, target[t]);
					}

					if (ns.getServerMoneyAvailable(target[t]) < (ns.getServerMaxMoney(target[t]))*.99) {
						ns.exec('gs.script', servers[s], gLthreads, target[t]);
					}


					if (ns.getServerMoneyAvailable(target[t]) == (ns.getServerMaxMoney(target[t]))) {
						ns.exec('hs.script', servers[s], hsthreads, target[t]);
					}

				}

				++t; await ns.sleep(.00000000002048 / 409600);
			}

			++s, await ns.sleep(.00000000002048 / 409600);
		}

		await ns.sleep(.00000000002048 / 409600);
	}

}
