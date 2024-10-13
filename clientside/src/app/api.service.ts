import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) {
  }

  server="http://localhost:3000"

  // 获取所有筹款信息
  getFundraisers() {
    return this.http.get(this.server + "/fundraisers")
  }
  // 获取所有活跃的筹款活动
  getActiveFundraisers() {
    return this.http.get(this.server + "/fundraisers/active")
  }
  // 获取所有类别
  getCategories() {
    return this.http.get(this.server + "/categories")
  }
  // 根据条件获取活跃的筹款项目
  getSearchFundraisers(organizer:string, city:string, category:string) {
    return this.http.get(this.server + `/search?organizer=${organizer}&city=${city}&category=${category}`)
  }
  // 获取特定筹款活动
  getFundraisers(fundraiserId: string) {
    return this.http.get(this.server + "/fundraisers/"+fundraiserId)
  }
  // 添加筹款活动
  addFundraiser(organizer:string, caption:string, target_funding:string, current_funding:string, city:string, active:string, category:string) {
    return this.http.post(this.server + "/fundraisers", {
      organizer: organizer,
      caption: caption,
      target_funding: target_funding,
      current_funding: current_funding,
      city: city,
      active: active,
      category: category,
    })
  }
  // 更新筹款活动
  updateFundraiser(fundraiserId: string,organizer:string, caption:string, target_funding:string, current_funding:string, city:string, active:string, category:string) {
    return this.http.put(this.server + "/fundraisers/"+fundraiserId, {
      organizer: organizer,
      caption: caption,
      target_funding: target_funding,
      current_funding: current_funding,
      city: city,
      active: active,
      category: category,
    })
  }
  // 删除筹款活动
  deleteFundraisers(fundraiserId: string) {
    return this.http.delete(this.server + "/fundraisers/"+fundraiserId)
  }
  // 捐款
  addFundraiser(amount:string, giver:string, fundraiserId:string) {
    return this.http.post(this.server + "/donations", {
      amount: amount,
      giver: giver,
      fundraiserId: fundraiserId
    })
  }
}
