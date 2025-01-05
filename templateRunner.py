from flask import Flask, render_template

templateRunner = Flask(__name__)

articles = [
    {'title': 'Article 1', 'content': '...'},
    {'title': 'Article 2', 'content': '...'},
    # ... more articles
]

@templateRunner.route('/article/<int:article_id>')
def show_article(article_id):
    article = articles[article_id - 1]  # Assuming 1-based indexing
    return render_template('article.html', title=article['title'], content=article['content'])

if __name__ == '__main__':
    templateRunner.run(debug=True)


