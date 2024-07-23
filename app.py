from flask import Flask, render_template

app = Flask(__name__,static_url_path='/static')

# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Route for the login page
@app.route('/login')
def login():
    return render_template('login.html')

# Route for the signup page
@app.route('/signup')
def signup():
    return render_template('signup.html')

# Route for the about page
@app.route('/about')
def about():
    return render_template('about.html')

# Route for the contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Route for the product page
@app.route('/product')
def product():
    return render_template('product.html')

# Route for the Turmeric product page
@app.route('/products/turmeric')
def turmeric():
    return render_template('turmeric.html')

if __name__ == '__main__':
    app.run(debug=True)
