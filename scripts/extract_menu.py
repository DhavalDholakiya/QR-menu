from pathlib import Path
import sys

import pdfplumber


pdf_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("docs/menu-reference/latest/Cuppa Menu Latest.pdf")
output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else pdf_path.with_suffix(".txt")

pages = []
with pdfplumber.open(pdf_path) as doc:
    print(f"pages {len(doc.pages)}")
    for page_number, page in enumerate(doc.pages, 1):
        text = page.extract_text(x_tolerance=1, y_tolerance=3) or ""
        pages.append(f"\n--- PAGE {page_number} ---\n{text}")

output_path.write_text("\n".join(pages), encoding="utf-8")
