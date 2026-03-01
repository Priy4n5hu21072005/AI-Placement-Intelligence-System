
import os

filepath = r'c:\Users\priya\OneDrive\Desktop\Career\Major_Project\backend\requirements.txt'
try:
    with open(filepath, 'rb') as f:
        content = f.read()
    
    # Try decoding as utf-16-le
    try:
        text = content.decode('utf-16-le')
        print("UTF-16-LE content:")
        print(text)
    except:
        print("Not UTF-16-LE, trying utf-8")
        print(content.decode('utf-8'))
except Exception as e:
    print(f"Error: {e}")
