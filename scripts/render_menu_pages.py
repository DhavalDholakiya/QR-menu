from pathlib import Path
import sys

import pdfplumber


pdf_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("docs/menu-reference/latest/Cuppa Menu Latest.pdf")
output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("docs/menu-reference/latest/menu-pages-latest")
output_dir.mkdir(exist_ok=True)

with pdfplumber.open(pdf_path) as doc:
    for index, page in enumerate(doc.pages, 1):
        image = page.to_image(resolution=160).original
        image.save(output_dir / f"page-{index}.png")
        print(output_dir / f"page-{index}.png")
