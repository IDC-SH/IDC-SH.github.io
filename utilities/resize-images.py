import cv2
import numpy as np

import os

input_folder = "./images/"
output_folder = "./images-resized/"

from pathlib import Path
Path(output_folder).mkdir(parents=True, exist_ok=True)

for file in os.listdir(input_folder):
    image = cv2.imread(f"{input_folder}{file}", cv2.IMREAD_UNCHANGED)
    if image.shape[2] == 4:
        trans_mask = image[:, :, 3] == 0
        image[trans_mask] = [255, 255, 255, 255]
        image = cv2.cvtColor(image, cv2.COLOR_BGRA2BGR)
    h, w = image.shape[:2]
    ratio = w / h
    print(f"{file} {image.shape=} {ratio>16/9=}")

    result = np.ones((1080, 1920, 3), np.uint8) * 0xFF
    if ratio > 16 / 9:
        width = 1920
        height = int(1920 / w * h)
        image = cv2.resize(src=image, dsize=(width, height))
        height = image.shape[0]
        start = int(1080 / 2 - height / 2)
        result[start : start + height] = image[:]
    else:
        height = 1080
        width = int(1080 / h * w)
        image = cv2.resize(src=image, dsize=(width, height))
        width = image.shape[1]
        start = int(1920 / 2 - width / 2)
        result[:, start : start + width] = image[:]

    filename = file.split(".")[0]
    cv2.imwrite(f"{output_folder}{filename}.jpeg", result)
