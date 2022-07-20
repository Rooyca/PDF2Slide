# PDF Vision

This first version does not support uploading files and only displays images that are in /public/images. The idea is to implement in version two the option to upload files (pdf's) and then convert them into images that can be display by the platform. 

## About v2

It's currently in development and you can check out the progress here: [PDFVision@customizable](https://github.com/Rooyca/pdf-visual/tree/customizable)

### Toolts of v2

There are some tools that I am currently using in version 2.0. Here is the list:

- Cloudinary (to store images)
- Celery (to make asynchronous tasks)
- Redis (to store queues and results)
- MongoDB (to store information about pdf and url's of images)
- FastAPI (as a backend)
- Vue 3

