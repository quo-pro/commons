export const FILE_VISIBILITY_ENUMS = ['Private', 'Public'] as const;
export type T_FILE_VISIBILITY_TYPE = (typeof FILE_VISIBILITY_ENUMS)[number];

export const FILE_MIME_ENUMS = [
  // Popular General Document MIME Types
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/pdf', // .pdf
  'text/plain', // .txt
  'application/rtf', // .rtf
  'application/vnd.ms-excel', // .xls
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  'application/vnd.ms-powerpoint', // .ppt
  'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx

  // Image MIME Types
  'image/jpeg', // .jpeg
  'image/jpg', // .jpg
  'image/png', // .png
  'image/gif', // .gif
  'image/svg+xml', // .svg
  'image/tiff', // .tif, .tiff
  'image/bmp', // .bmp
  'image/webp', // .webp

  // Audio MIME Types
  'audio/mpeg', // .mp3
  'audio/wav', // .wav
  'audio/aac', // .aac
  'audio/ogg', // .ogg
  'audio/flac', // .flac

  // Video MIME Types
  'video/mp4', // .mp4
  'video/x-msvideo', // .avi
  'video/quicktime', // .mov
  'video/x-ms-wmv', // .wmv
  'video/x-flv', // .flv
  'video/x-matroska', // .mkv
  'video/webm', // .webm

  // Specialized Academic/Professional MIME Types
  'application/vnd.oasis.opendocument.text', // .odt
  'application/vnd.oasis.opendocument.spreadsheet', // .ods
  'application/vnd.oasis.opendocument.presentation', // .odp
  'text/csv', // .csv
  'application/json', // .json
  'application/xml', // .xml
  'text/html', // .html, .htm
  'application/x-latex', // .latex, .tex for academic papers
  'application/vnd.google-earth.kml+xml', // .kml for geographic data
  'application/vnd.google-earth.kmz', // .kmz for compressed KML files
  'application/x-python-code', // .py Python scripts
  'application/x-ipynb+json', // .ipynb Jupyter Notebooks
  'application/x-matlab-data', // .mat for MATLAB data files

  // Archive and Compression MIME Types
  'application/zip', // .zip
  'application/x-rar-compressed', // .rar
  'application/x-7z-compressed', // .7z
  'application/gzip', // .gz
  'application/x-tar', // .tar

  // eBook MIME Types
  'application/epub+zip', // .epub
  'application/x-mobipocket-ebook', // .mobi, .prc
  'application/vnd.amazon.ebook', // .azw

  // CAD and 3D Modeling MIME Types
  'image/vnd.dwg', // .dwg for AutoCAD
  'model/vnd.collada+xml', // .dae for Collada 3D models
  'model/x3d+xml', // .x3d for X3D files
  'application/sla', // .stl for 3D print files
] as const;

export type T_FILE_MIME_ENUM_TYPE = (typeof FILE_MIME_ENUMS)[number];
