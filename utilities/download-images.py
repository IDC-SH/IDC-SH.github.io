import json
import requests

publications_json = "../src/data/publications.json"
images_save_folder = "./images/"

with open(publications_json) as f:
    publications = json.load(f)

for publication in publications:
    img_url = publication["image"]
    if img_url != "":
        img_i = publication["i"]
        img_extension = img_url.rsplit("/", 1)[-1].rsplit(".", 1)[-1]
        img_filename = f"{img_i}.{img_extension}"

        print(f"start downloading image {img_i}")
        img_data = requests.get(img_url).content
        with open(f"{images_save_folder}{img_filename}", "wb") as f:
            f.write(img_data)
