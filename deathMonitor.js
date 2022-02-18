/** @param {NS} ns **/export async function main(ns) 
{
ns.tail();ns.disableLog('ALL');	
	
var TnD=0
var TjgD=0
var TigD=0

while(true)
{ns.clearLog();
var nD = ns.getServerMoneyAvailable('n00dles');
var jgD = ns.getServerMoneyAvailable('joesguns');
var igD = ns.getServerMoneyAvailable('iron-gym');
ns.print('Death Totals: (time spent dead - in seconds)');
if(nD==0)++TnD;ns.print('n00dles  : ',(Math.round ((TnD*.420)*2.38)/1000),' seconds');
if(jgD==0)++TjgD;ns.print('joesguns : ',(Math.round((TjgD*.420)*2.38)/1000),' seconds');
if(igD==0)++TigD;ns.print('iron-gym : ',(Math.round((TigD*.420)*2.38)/1000),' seconds');

ns.print(' ');
ns.print('sever   : |Vitality(%) (Sec.Lvl: Current vs. Min.)');
		 ns.print('home       : ',Math.floor(((ns.getServerMoneyAvailable('home'   ))*100)/100000000000),' %');
ns.print('n00dles    : ',Math.floor(((ns.getServerMoneyAvailable('n00dles'))*100)/ns.getServerMaxMoney('n00dles')     ),' %            (',Math.round(ns.getServerSecurityLevel('n00dles')),' vs ',ns.getServerMinSecurityLevel('n00dles'), ')');
ns.print('joeguns    : ',Math.floor(((ns.getServerMoneyAvailable('joesguns'))*100)/ns.getServerMaxMoney('joesguns')     ),' %            (',Math.round(ns.getServerSecurityLevel('joesguns')),' vs ',ns.getServerMinSecurityLevel('joesguns'), ')');
ns.print('iron-gym   : ',Math.floor(((ns.getServerMoneyAvailable('iron-gym'))*100)/ns.getServerMaxMoney('iron-gym')     ),' %            (',Math.round(ns.getServerSecurityLevel('iron-gym')),' vs ',ns.getServerMinSecurityLevel('iron-gym'), ')');


await ns.sleep(.420);}}
