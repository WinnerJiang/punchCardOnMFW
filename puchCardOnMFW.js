console.log('Hello, world!');
var page = require('webpage').create();
//console.log('The default user agent is ' + page.settings.userAgent);
page.cookies = [
	{
    'name' : '26afe81f3c9398c9ff3b0338547070cc',
    'value' : '2378'
	},
	{
    'name' : '3c4751be7aca0d6a2fd9c5b2375bb3e1',
    'value' : '2221'
	},
	{
    'name' : '70424063_LAST_MSG_DAKA_DATE',
    'value' : '1445827401'
	},
	{
    'name' : 'CNZZDATA30065558',
    'value' : 'cnzz_eid%3D1612457744-1442894840-null%26ntime%3D1445825741'
	},
	{
    'name' : 'PHPSESSID',
    'value' : 'r07nrjsfq5bm9hv364li6at442'
	},
	{
    'name' : 'PHPSESSID',
    'value' : 'r07nrjsfq5bm9hv364li6at442'
	},
	{
    'name' : '__mfwft',
    'value' : '1441003445'
	},
	{
    'name' : '__mfwlt',
    'value' : '1445827401'
	},
	{
    'name' : '__mfwlv',
    'value' : '1445827119'
	},
	{
    'name' : '__mfwthirduuid',
    'value' : 'edcbdf0a25cfbbc3b3a79288db9e9a2c'
	},
	{
    'name' : '__mfwuuid',
    'value' : '55e3f7b3-9730-0dbb-e5b6-9b8744312fd4'
	},
	{
    'name' : '__mfwvn',
    'value' : '12'
	},
	{
    'name' : '__utma',
    'value' : '258432534.45838626.1442894887.1445588826.1445827121.11'
	},
	{
    'name' : '__utmb',
    'value' : '258432534.7.10.1445827121'
	},
	{
    'name' : '__utmc',
    'value' : '258432534'
	},
	{
    'name' : '__utmt',
    'value' : '1'
	},
	{
    'name' : '__utmz',
    'value' : '258432534.1445827121.11.10.utmcsr=baidu|utmccn=(organic)|utmcmd=organic'
	},
	{
    'name' : '_r',
    'value' : 'baidu'
	},
	{
    'name' : '_rp',
    'value' : 'a%3A2%3A%7Bs%3A1%3A%22p%22%3Bs%3A18%3A%22www.baidu.com%2Flink%22%3Bs%3A1%3A%22t%22%3Bi%3A1444625189%3B%7D'
	},
	{
    'name' : 'check_in',
    'value' : '2015-10-28'
	},
	{
    'name' : 'check_out',
    'value' : '2015-10-29'
	},
	{
    'name' : 'hotel_visit_hist',
    'value' : '22950%7C46237%7C46270'
	},
	{
    'name' : 'mafengwo',
    'value' : '06135cb18f6cdfc795d5bab03dca81d8_70424063_5629f46505a8a5.43933401_5629f46505a963.03703299'
	},
	{
    'name' : 'mfw_uid',
    'value' : '70424063'
	},
	{
    'name' : 'mfw_uuid',
    'value' : '55e3f7b3-9730-0dbb-e5b6-9b8744312fd4'
	},
	{
    'name' : 'oad_n',
    'value' : 'a%3A6%3A%7Bs%3A5%3A%22refer%22%3Bs%3A21%3A%22https%3A%2F%2Fwww.baidu.com%22%3Bs%3A2%3A%22hp%22%3Bs%3A13%3A%22www.baidu.com%22%3Bs%3A3%3A%22oid%22%3Bi%3A1026%3Bs%3A2%3A%22dm%22%3Bs%3A15%3A%22www.mafengwo.cn%22%3Bs%3A2%3A%22ft%22%3Bs%3A19%3A%222015-10-22+14%3A18%3A44%22%3Bs%3A2%3A%22pv%22%3Bi%3A45%3B%7D'
	},
	{
    'name' : 'uva',
    'value' : 'a%3A4%3A%7Bs%3A2%3A%22lt%22%3Bi%3A1445827401%3Bs%3A5%3A%22rhost%22%3Bs%3A0%3A%22%22%3Bs%3A10%3A%22last_refer%22%3Bs%3A1%3A%22%2F%22%3Bs%3A4%3A%22step%22%3Bi%3A283%3B%7D'
	}
];
page.open('http://www.mafengwo.cn/', function(status) {
	if (status !== 'success') {
			console.log('Unable to access network');
		} else {
			console.log("open mafengwo webpage success!");
			
			var ua = page.evaluate(function() {
			var temp = document.getElementById('head-btn-daka-active').click();
			console.log("temp",temp);
			return temp;
			});
			console.log(ua);
			phantom.exit();
//	});
	}
	
});
