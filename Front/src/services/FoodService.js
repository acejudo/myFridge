import Api from '@/services/Api'

export default {
  getFood () {
    return Api().get('food')
  }
}
