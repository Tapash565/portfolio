import pypdf
import sys

def extract_text(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += page.extract_text() + "\n"
        with open("resume_final.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Done")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(1)
    extract_text(sys.argv[1])
