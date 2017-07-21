#This file is used to scrape the course names from the UVic calendar


#get my imports
import requests
from bs4 import BeautifulSoup
import json

#define functions that we will use later
def reduce_to_name(link):

    product = link.split('/')
    
    for x in product:
        if x.isupper():
            return x

def clean_number_list(numberList):
    
    numberList = sorted(list(set(numberList)))
    for index, x in enumerate(numberList):
        numberList[index] = x.split('.')[0]
    return numberList


#get the initial web page
url = "http://web.uvic.ca/calendar2017-09/courses/"
r = requests.get(url)
soup = BeautifulSoup(r.content, "html.parser")

#get all the links
data = soup.find_all('a')

course_types_links = []

#create object for storing the final data
class final_data(object):
    name = ""
    numbers = []

    def __init__(self, name, numbers):
        self.name = name
        self.numbers = numbers

    def to_json_compat(self):
        return dict(
            name = self.name,
            numbers = self.numbers
        )

#create the final data list
final_data_list = []


#get just the right links and add their course types to the list
for DATA in data:
    if "/CDs/" in str(DATA):
        if str(DATA.text).isupper():
            course_types_links.append(DATA.get('href'))

#remove any duplicates
course_types_links = sorted(list(set(course_types_links)))

#crawl through the page links to find the course numbers
numbers_url = ""

for x in course_types_links:


    numbers_url = url + x
    req = requests.get(numbers_url)
    numbers_soup = BeautifulSoup(req.content, "html.parser")

    numbers_data = numbers_soup.find_all('a')

    #Create a final_data object and give it a name
    dataObject = final_data(reduce_to_name(numbers_url), [])


    for DATA in numbers_data:
        if DATA.get('href') is not None and '/' not in DATA.get('href') and DATA.get('href')[0].isdigit():
            dataObject.numbers.append(DATA.get('href'))

    #append the final data object to the object list
    final_data_list.append(dataObject)


#clean up the numbers list
for x in final_data_list:
    x.numbers = clean_number_list(x.numbers)


#test
#for x in final_data_list:
#    print x.name
#    for y in x.numbers:
#        print y

print json.dumps([data.to_json_compat() for data in final_data_list])
