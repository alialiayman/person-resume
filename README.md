# person-resume

Create a dynamic, hosted resume that you can easily edit and share. This project provides a fast and flexible way to showcase your professional experience with a unique URL based on your phone number or a preferred name.

## Overview

With **person-resume**, you can create a hosted resume at `person-resume.web.app`, where each resume has a unique URL. By default, the URL is generated using your phone number in the format `person-resume.web.app/1234567890`. If you prefer a more personalized URL, you can clone this repository, change the URL format to something like `yourname-resume.web.app`, and deploy it to your own Firebase Hosting or preferred hosting platform.

## Features

- **Editable**: Easily update your resume content directly through the hosted site.
- **Custom URL**: Use your phone number by default, or customize to a preferred name.
- **Hosted Solution**: Enjoy the convenience of a fully hosted, responsive resume on the web.

## Quick Start

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/person-resume.git
    cd person-resume
    ```

2. **Edit Your Information**: Replace the content with your own details in the provided template files.

3. **Change the URL (Optional)**: If you prefer a customized URL (e.g., `yourname-resume.web.app`), configure it in your Firebase Hosting settings or hosting platform of choice.

4. **Deploy to Firebase Hosting**:
    Follow the Firebase CLI commands to deploy:
    ```bash
    firebase login
    firebase init
    firebase deploy
    ```

5. **Visit Your Resume**: After deployment, access your resume at `person-resume.web.app/your-url`.

## Example

Check out an example resume:
- Default: [person-resume.web.app/19495221879](https://person-resume.web.app/19495221879)

## Contributing

Contributions are welcome! If you have suggestions for new features or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

