export default {
	domain: 'http://professional.xinhuamed.com.cn:8090',
    calendarUrl:'http://192.168.20.47:8010/App/scheduler.html',
    messageUrl:'http://192.168.20.47:8010/App/message.html',
	criticalUrl: '/ProfessionalWeb/Critical/CriticalList?id=2&agentid=3&flag=0&userid=9999&username=%E7%94%98%E5%AF%85&userdepart=0',
    voteUrl: '/ProfessionalWeb/Critical/CriticalList?id=2&agentid=3&flag=0&userid=9999&username=%E7%94%98%E5%AF%85&userdepart=0',
     
    getInPatientList:'/api/Professional/ApiCore/GetHospitalPatientByDt?doctor=9999&depts=10100000&division=10100301',
}


export const refreshControl = {
	tintColor: "rgba(241,196,15, 1)",
	title: "正在加载...",
	colors: ["rgba(241,196,15, 1)", "rgba(241,196,15, 0.9)", "rgba(241,196,15, 0.8)"],
	progressBackgroundColor: "#292829",
};
