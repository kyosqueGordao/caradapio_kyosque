import qrcode

URL = "https://kyosquegordao.github.io/caradapio_kyosque/"

qr = qrcode.QRCode(
    version=1,
    box_size=15,  # aumenta o tamanho dos quadrados
    border=4
)

qr.add_data(URL)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("qrcode.png")