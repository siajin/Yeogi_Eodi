import requests
import xmltodict
import json

url = 'http://ws.bus.go.kr/api/rest/busRouteInfo/getStaionByRoute'
params ={'serviceKey' : '3b8fT3jknHopLMG2c9X9Oie3fBGDDu1lUxG7z4kz5NhBXyRYE9HT6tj0b7f3XjF329+EV69Wwynx+0qO4LtJBw==', 'busRouteId' : '100100339' }
# decoding key, 버스 노선 번호
resXml = requests.get(url, params=params)
resXml = resXml.content.decode('utf-8')
resJson = json.dumps(xmltodict.parse(resXml), indent=4)
f = open("APIres.json", 'w')
f.write(resJson)
print()