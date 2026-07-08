from pathlib import Path
import re


html = Path("docs/cuppachai-site.html").read_text(encoding="utf-8", errors="ignore")

color_matches = re.findall(r"--color_(\d+):\s*([0-9]+),([0-9]+),([0-9]+)", html)
font_matches = re.findall(r"--font_(\d+):\s*([^;]+);", html)
explicit_hex = sorted(set(re.findall(r"#[0-9A-Fa-f]{3,8}", html)), key=str.lower)


def to_hex(r: str, g: str, b: str) -> str:
    return f"#{int(r):02X}{int(g):02X}{int(b):02X}"


colors = []
seen_color_numbers = set()
for number, red, green, blue in sorted(color_matches, key=lambda item: int(item[0])):
    if number in seen_color_numbers:
        continue
    seen_color_numbers.add(number)
    colors.append((f"color_{number}", f"{red}, {green}, {blue}", to_hex(red, green, blue)))

fonts = []
seen_font_numbers = set()
for number, value in sorted(font_matches, key=lambda item: int(item[0])):
    if number in seen_font_numbers:
        continue
    seen_font_numbers.add(number)
    fonts.append((f"font_{number}", value.strip()))

print("THEME COLORS")
for name, rgb, hex_value in colors:
    print(f"{name}: {hex_value} ({rgb})")

print("\nTHEME FONTS")
for name, value in fonts:
    print(f"{name}: {value}")

print("\nEXPLICIT HEX VALUES")
for hex_value in explicit_hex:
    print(hex_value)
