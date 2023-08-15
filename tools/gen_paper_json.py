import json
import csv


def saveJson(filename, data):
    with open(filename, "w") as f:
        json.dump(data, f, indent=4)


def check_button(url):
    if url == "" or url == None or url == "None":
        return False
    else:
        return True


with open("./papers_2023_0420.csv", newline="", encoding="utf-8") as csvfile:
    spamreader = csv.reader(csvfile)
    out = []
    for row in spamreader:
        title = row[1]
        author = row[2]
        publish = row[3]
        img = row[4]
        paper_url = row[5]
        button1 = check_button(paper_url)
        code_url = row[6]
        button2 = check_button(code_url)
        page_url = row[7]
        button3 = check_button(page_url)
        video_url = row[8]
        button4 = check_button(video_url)

        out.append(
            {
                "img": img,
                "title": title,
                "author": author,
                "publish": publish,
                "button1": button1,
                "paper_link": paper_url,
                "button2": button2,
                "code_link": code_url,
                "button3": button3,
                "page_link": page_url,
                "button4": button4,
                "video_link": video_url,
            }
        )

    print("gen json")
    saveJson("papers.json", out)
