import pdfkit
from jinja2 import Template

class ReportGeneration:
    def __init__(self):
        pass

    def generate_pdf_report(self, context, template_path, output_path):
        with open(template_path, 'r') as file:
            template = Template(file.read())
        html_content = template.render(context)
        pdfkit.from_string(html_content, output_path)
        return output_path