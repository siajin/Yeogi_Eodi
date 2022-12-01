import requests
import xmltodict
import json


def getBusRouteList(stId, busRouteId, ord):
    url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute'
    params ={'serviceKey' : '3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==', 'stId' : stId, 'busRouteId' : busRouteId, 'ord' : ord }
    resXml = requests.get(url, params=params)
    resXml = resXml.content.decode('utf-8')
    resJson = json.dumps(xmltodict.parse(resXml), indent=4)
    return resJson
    # f = open("APIres_getBusRouteList.json", 'w')
    # f.write(resJson)
    # f.close()


def getArrInfoByRouteAll(busRouteId):
    url = 'http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll'
    params = {'serviceKey': '3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==',
              'busRouteId': busRouteId}
    resXml = requests.get(url, params=params)
    resXml = resXml.content.decode('utf-8')
    resJson = json.dumps(xmltodict.parse(resXml), indent=4, ensure_ascii=False)
    return resJson
    # f = open("APIres_getArrInfoByRouteAll.json", 'w', encoding="UTF-8")
    # f.write(resJson)
    # f.close()
    
# def getNodeNameByRouteId(routeId): 
    


getArrInfoByRouteAll('100100339')
