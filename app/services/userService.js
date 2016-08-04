/**
 * Created by ArmyKing on 16/7/29.
 */
import * as requestService from './request';
import realm from '../realm/user';
import * as tokenService from './token';

export function Login(userName,usrPwd,vildNum) {
    var dict= 'grant_type=password&username='+userName+'&password='+usrPwd+'&clientkey=1246&validcode='+vildNum+'&devtype=5'

    return requestService.post('/ProfessionalWeb/oauth20/token',dict,'form').then((data)=>{
        return data;
    });
}
export function updateUserInfo(userName,token,paraInfo) {


        var token = "Bearer " +token;
        tokenService.setToken(token);

    realm.write(()=>{
        var parainfo=JSON.parse(paraInfo).Result;
        if(parainfo){
            // 创建一个用户对象
            realm.create('UserInfo', {Id: "1", Name: parainfo.Employee.Name.toString(),Code: parainfo.Employee.Code.toString(), UserName: userName.toString(),Token:token.toString()});


        }


        let userMenu = realm.objects('UserMenu');
        realm.delete(userMenu); // 删除所有的用户菜单
        // 创建菜单对象
        parainfo.moudle[0].Menus.forEach(function (item) {

            realm.create('UserMenu', {Id: item.Id.toString(), Icon: item.Icon.toString(),
                Name: item.Name.toString(),SortId:item.SortId.toString(),Actived:item.Actived.toString()});
        })

        let userDept = realm.objects('UserDept');
        realm.delete(userDept); // 删除所有的用户科室

        // 创建科室对象
        parainfo.DeptPermissions.forEach(function (item) {
            realm.create('UserDept', {DeptCode: item.DeptCode.toString(), DeptName: item.DeptName.toString()});
        })
    });
    return true;
}
// function updateUserMenume() {
//
// }