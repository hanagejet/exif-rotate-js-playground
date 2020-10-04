(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"],{

/***/ "./node_modules/exif-js/exif.js":
/*!**************************************!*\
  !*** ./node_modules/exif-js/exif.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/getBase64Strings.js":
/*!*************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/getBase64Strings.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64Strings = void 0;
const getImages_1 = __webpack_require__(/*! ./utils/getImages */ "./node_modules/exif-rotate-js/lib/utils/getImages.js");
const options_1 = __webpack_require__(/*! ./options */ "./node_modules/exif-rotate-js/lib/options.js");
const getBrowserOrientation_1 = __webpack_require__(/*! ./utils/getBrowserOrientation */ "./node_modules/exif-rotate-js/lib/utils/getBrowserOrientation.js");
exports.getBase64Strings = async (files, { maxSize = options_1.defaultOptions.maxSize, type = options_1.defaultOptions.type, } = {}) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('canvas can not created');
    }
    const images = await getImages_1.getImages(files);
    const hasBrowserOrientation = await getBrowserOrientation_1.getBrowserOrientation();
    if (hasBrowserOrientation) {
        const base64s = images.map((image) => {
            const { width, height } = getImages_1.getSize(image.width, image.height, maxSize);
            canvas.setAttribute('width', `${width}px`);
            canvas.setAttribute('height', `${height}px`);
            context.drawImage(image, 0, 0, width, height);
            return canvas.toDataURL(type);
        });
        return base64s;
    }
    const base64s = images.map((image) => {
        const orientation = getImages_1.getOrientation(image);
        const { width, height } = getImages_1.getSize(orientation > 4 ? image.height : image.width, orientation > 4 ? image.width : image.height, maxSize);
        canvas.setAttribute('width', `${width}px`);
        canvas.setAttribute('height', `${height}px`);
        const { translate, scale, rotate } = getImages_1.getCanvasOptions(width, height, orientation);
        context.translate(translate.x, translate.y);
        context.scale(scale.x, scale.y);
        context.rotate(rotate.angle);
        // exif orientation values > 4 correspond to portrait orientation.
        // width and height parameters must be swapped for landscape to ensure correct image display
        if (orientation > 4) {
            context.drawImage(image, 0, 0, height, width);
        }
        else {
            context.drawImage(image, 0, 0, width, height);
        }
        return canvas.toDataURL(type);
    });
    return base64s;
};


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./getBase64Strings */ "./node_modules/exif-rotate-js/lib/getBase64Strings.js"), exports);


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/options.js":
/*!****************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/options.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
exports.defaultOptions = {
    maxSize: 720,
    type: 'image/jpeg',
};


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/getBrowserOrientation.js":
/*!************************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/getBrowserOrientation.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Thanks JavaScript-Load-Image repo
// https://github.com/blueimp/JavaScript-Load-Image/blob/1e4df707821a0afcc11ea0720ee403b8759f3881/js/load-image-orientation.js#L37-L53
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserOrientation = void 0;
const readImage_1 = __webpack_require__(/*! ./readImage */ "./node_modules/exif-rotate-js/lib/utils/readImage.js");
async function getBrowserOrientation() {
    // black 2x1 JPEG, with the following meta information set:
    // EXIF Orientation: 6 (Rotated 90° CCW)
    const testImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
        'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
        'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
        'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
        'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
        'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
    const img = await readImage_1.readImage(testImageURL);
    // Check if browser supports automatic image orientation:
    return img.width === 1 && img.height === 2;
}
exports.getBrowserOrientation = getBrowserOrientation;


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/getImages.js":
/*!************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/getImages.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanvasOptions = exports.getOrientation = exports.getSize = exports.getImages = void 0;
const EXIF = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
const readFile_1 = __webpack_require__(/*! ./readFile */ "./node_modules/exif-rotate-js/lib/utils/readFile.js");
const readImage_1 = __webpack_require__(/*! ./readImage */ "./node_modules/exif-rotate-js/lib/utils/readImage.js");
const options_1 = __webpack_require__(/*! ../options */ "./node_modules/exif-rotate-js/lib/options.js");
async function getImages(files) {
    const datas = await readFile_1.getDataFromReadFile(files);
    return await Promise.all(datas.map((item) => readImage_1.readImage(item)));
}
exports.getImages = getImages;
function getSize(width, height, maxSize = options_1.defaultOptions.maxSize) {
    const parseWidth = maxSize < width ? maxSize : width;
    const parseHeight = maxSize < height ? maxSize : height;
    if (width > height) {
        return {
            width: parseWidth,
            height: height * (parseWidth / width),
        };
    }
    if (height > width) {
        return {
            width: width * (parseHeight / height),
            height: parseHeight,
        };
    }
    return {
        width: parseWidth,
        height: parseHeight,
    };
}
exports.getSize = getSize;
function getOrientation(img) {
    let orientation = 1;
    // @ts-ignore not string: https://github.com/exif-js/exif-js/pull/198
    EXIF.getData(img, () => {
        orientation = EXIF.getTag(img, 'Orientation');
    });
    return orientation;
}
exports.getOrientation = getOrientation;
function getCanvasOptions(width, height, orientation) {
    const options = {
        translate: {
            x: 0,
            y: 0,
        },
        scale: {
            x: 1,
            y: 1,
        },
        rotate: {
            angle: 0,
        },
    };
    switch (orientation) {
        case 2:
            // horizontal flip
            return {
                ...options,
                translate: {
                    ...options.translate,
                    x: width,
                },
                scale: {
                    ...options.scale,
                    x: -1,
                },
            };
        case 3:
            // 180° rotate left
            return {
                ...options,
                translate: {
                    x: width,
                    y: height,
                },
                rotate: {
                    angle: Math.PI,
                },
            };
        case 4:
            // vertical flip
            return {
                ...options,
                translate: {
                    ...options.translate,
                    y: height,
                },
                scale: {
                    ...options.scale,
                    y: -1,
                },
            };
        case 5:
            // vertical flip + 90 rotate right
            return {
                ...options,
                scale: {
                    ...options.scale,
                    x: -1,
                },
                rotate: {
                    angle: (90 * Math.PI) / 180,
                },
            };
        case 6:
            // 90° rotate right
            return {
                ...options,
                translate: {
                    ...options.translate,
                    x: width,
                },
                rotate: {
                    angle: (90 * Math.PI) / 180,
                },
            };
        case 7:
            // horizontal flip + 90 rotate right
            return {
                ...options,
                translate: {
                    x: width,
                    y: height,
                },
                rotate: {
                    angle: (90 * Math.PI) / 180,
                },
                scale: {
                    ...options.scale,
                    y: -1,
                },
            };
        case 8:
            // 90° rotate left
            return {
                ...options,
                translate: {
                    ...options.translate,
                    y: height,
                },
                rotate: {
                    angle: -(90 * Math.PI) / 180,
                },
            };
        default:
            return options;
    }
}
exports.getCanvasOptions = getCanvasOptions;


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/readFile.js":
/*!***********************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/readFile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromReadFile = exports.readFile = void 0;
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}
exports.readFile = readFile;
async function getDataFromReadFile(files) {
    return await Promise.all(Array.from(files).map((file) => readFile(file)));
}
exports.getDataFromReadFile = getDataFromReadFile;


/***/ }),

/***/ "./node_modules/exif-rotate-js/lib/utils/readImage.js":
/*!************************************************************!*\
  !*** ./node_modules/exif-rotate-js/lib/utils/readImage.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readImage = void 0;
function readImage(src) {
    const img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
        img.src = src;
    });
}
exports.readImage = readImage;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1qcy9leGlmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvZ2V0QmFzZTY0U3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL2dldEJyb3dzZXJPcmllbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL2dldEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhpZi1yb3RhdGUtanMvbGliL3V0aWxzL3JlYWRGaWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGlmLXJvdGF0ZS1qcy9saWIvdXRpbHMvcmVhZEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUE4QjtBQUN0QyxZQUFZLEtBQTZCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTSxFQUVOOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ICB2YXIgZGVidWcgPSBmYWxzZTtcblxuICAgIHZhciByb290ID0gdGhpcztcblxuICAgIHZhciBFWElGID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBFWElGKSByZXR1cm4gb2JqO1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRVhJRikpIHJldHVybiBuZXcgRVhJRihvYmopO1xuICAgICAgICB0aGlzLkVYSUZ3cmFwcGVkID0gb2JqO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gRVhJRjtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLkVYSUYgPSBFWElGO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QuRVhJRiA9IEVYSUY7XG4gICAgfVxuXG4gICAgdmFyIEV4aWZUYWdzID0gRVhJRi5UYWdzID0ge1xuXG4gICAgICAgIC8vIHZlcnNpb24gdGFnc1xuICAgICAgICAweDkwMDAgOiBcIkV4aWZWZXJzaW9uXCIsICAgICAgICAgICAgIC8vIEVYSUYgdmVyc2lvblxuICAgICAgICAweEEwMDAgOiBcIkZsYXNocGl4VmVyc2lvblwiLCAgICAgICAgIC8vIEZsYXNocGl4IGZvcm1hdCB2ZXJzaW9uXG5cbiAgICAgICAgLy8gY29sb3JzcGFjZSB0YWdzXG4gICAgICAgIDB4QTAwMSA6IFwiQ29sb3JTcGFjZVwiLCAgICAgICAgICAgICAgLy8gQ29sb3Igc3BhY2UgaW5mb3JtYXRpb24gdGFnXG5cbiAgICAgICAgLy8gaW1hZ2UgY29uZmlndXJhdGlvblxuICAgICAgICAweEEwMDIgOiBcIlBpeGVsWERpbWVuc2lvblwiLCAgICAgICAgIC8vIFZhbGlkIHdpZHRoIG9mIG1lYW5pbmdmdWwgaW1hZ2VcbiAgICAgICAgMHhBMDAzIDogXCJQaXhlbFlEaW1lbnNpb25cIiwgICAgICAgICAvLyBWYWxpZCBoZWlnaHQgb2YgbWVhbmluZ2Z1bCBpbWFnZVxuICAgICAgICAweDkxMDEgOiBcIkNvbXBvbmVudHNDb25maWd1cmF0aW9uXCIsIC8vIEluZm9ybWF0aW9uIGFib3V0IGNoYW5uZWxzXG4gICAgICAgIDB4OTEwMiA6IFwiQ29tcHJlc3NlZEJpdHNQZXJQaXhlbFwiLCAgLy8gQ29tcHJlc3NlZCBiaXRzIHBlciBwaXhlbFxuXG4gICAgICAgIC8vIHVzZXIgaW5mb3JtYXRpb25cbiAgICAgICAgMHg5MjdDIDogXCJNYWtlck5vdGVcIiwgICAgICAgICAgICAgICAvLyBBbnkgZGVzaXJlZCBpbmZvcm1hdGlvbiB3cml0dGVuIGJ5IHRoZSBtYW51ZmFjdHVyZXJcbiAgICAgICAgMHg5Mjg2IDogXCJVc2VyQ29tbWVudFwiLCAgICAgICAgICAgICAvLyBDb21tZW50cyBieSB1c2VyXG5cbiAgICAgICAgLy8gcmVsYXRlZCBmaWxlXG4gICAgICAgIDB4QTAwNCA6IFwiUmVsYXRlZFNvdW5kRmlsZVwiLCAgICAgICAgLy8gTmFtZSBvZiByZWxhdGVkIHNvdW5kIGZpbGVcblxuICAgICAgICAvLyBkYXRlIGFuZCB0aW1lXG4gICAgICAgIDB4OTAwMyA6IFwiRGF0ZVRpbWVPcmlnaW5hbFwiLCAgICAgICAgLy8gRGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBvcmlnaW5hbCBpbWFnZSB3YXMgZ2VuZXJhdGVkXG4gICAgICAgIDB4OTAwNCA6IFwiRGF0ZVRpbWVEaWdpdGl6ZWRcIiwgICAgICAgLy8gRGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBpbWFnZSB3YXMgc3RvcmVkIGRpZ2l0YWxseVxuICAgICAgICAweDkyOTAgOiBcIlN1YnNlY1RpbWVcIiwgICAgICAgICAgICAgIC8vIEZyYWN0aW9ucyBvZiBzZWNvbmRzIGZvciBEYXRlVGltZVxuICAgICAgICAweDkyOTEgOiBcIlN1YnNlY1RpbWVPcmlnaW5hbFwiLCAgICAgIC8vIEZyYWN0aW9ucyBvZiBzZWNvbmRzIGZvciBEYXRlVGltZU9yaWdpbmFsXG4gICAgICAgIDB4OTI5MiA6IFwiU3Vic2VjVGltZURpZ2l0aXplZFwiLCAgICAgLy8gRnJhY3Rpb25zIG9mIHNlY29uZHMgZm9yIERhdGVUaW1lRGlnaXRpemVkXG5cbiAgICAgICAgLy8gcGljdHVyZS10YWtpbmcgY29uZGl0aW9uc1xuICAgICAgICAweDgyOUEgOiBcIkV4cG9zdXJlVGltZVwiLCAgICAgICAgICAgIC8vIEV4cG9zdXJlIHRpbWUgKGluIHNlY29uZHMpXG4gICAgICAgIDB4ODI5RCA6IFwiRk51bWJlclwiLCAgICAgICAgICAgICAgICAgLy8gRiBudW1iZXJcbiAgICAgICAgMHg4ODIyIDogXCJFeHBvc3VyZVByb2dyYW1cIiwgICAgICAgICAvLyBFeHBvc3VyZSBwcm9ncmFtXG4gICAgICAgIDB4ODgyNCA6IFwiU3BlY3RyYWxTZW5zaXRpdml0eVwiLCAgICAgLy8gU3BlY3RyYWwgc2Vuc2l0aXZpdHlcbiAgICAgICAgMHg4ODI3IDogXCJJU09TcGVlZFJhdGluZ3NcIiwgICAgICAgICAvLyBJU08gc3BlZWQgcmF0aW5nXG4gICAgICAgIDB4ODgyOCA6IFwiT0VDRlwiLCAgICAgICAgICAgICAgICAgICAgLy8gT3B0b2VsZWN0cmljIGNvbnZlcnNpb24gZmFjdG9yXG4gICAgICAgIDB4OTIwMSA6IFwiU2h1dHRlclNwZWVkVmFsdWVcIiwgICAgICAgLy8gU2h1dHRlciBzcGVlZFxuICAgICAgICAweDkyMDIgOiBcIkFwZXJ0dXJlVmFsdWVcIiwgICAgICAgICAgIC8vIExlbnMgYXBlcnR1cmVcbiAgICAgICAgMHg5MjAzIDogXCJCcmlnaHRuZXNzVmFsdWVcIiwgICAgICAgICAvLyBWYWx1ZSBvZiBicmlnaHRuZXNzXG4gICAgICAgIDB4OTIwNCA6IFwiRXhwb3N1cmVCaWFzXCIsICAgICAgICAgICAgLy8gRXhwb3N1cmUgYmlhc1xuICAgICAgICAweDkyMDUgOiBcIk1heEFwZXJ0dXJlVmFsdWVcIiwgICAgICAgIC8vIFNtYWxsZXN0IEYgbnVtYmVyIG9mIGxlbnNcbiAgICAgICAgMHg5MjA2IDogXCJTdWJqZWN0RGlzdGFuY2VcIiwgICAgICAgICAvLyBEaXN0YW5jZSB0byBzdWJqZWN0IGluIG1ldGVyc1xuICAgICAgICAweDkyMDcgOiBcIk1ldGVyaW5nTW9kZVwiLCAgICAgICAgICAgIC8vIE1ldGVyaW5nIG1vZGVcbiAgICAgICAgMHg5MjA4IDogXCJMaWdodFNvdXJjZVwiLCAgICAgICAgICAgICAvLyBLaW5kIG9mIGxpZ2h0IHNvdXJjZVxuICAgICAgICAweDkyMDkgOiBcIkZsYXNoXCIsICAgICAgICAgICAgICAgICAgIC8vIEZsYXNoIHN0YXR1c1xuICAgICAgICAweDkyMTQgOiBcIlN1YmplY3RBcmVhXCIsICAgICAgICAgICAgIC8vIExvY2F0aW9uIGFuZCBhcmVhIG9mIG1haW4gc3ViamVjdFxuICAgICAgICAweDkyMEEgOiBcIkZvY2FsTGVuZ3RoXCIsICAgICAgICAgICAgIC8vIEZvY2FsIGxlbmd0aCBvZiB0aGUgbGVucyBpbiBtbVxuICAgICAgICAweEEyMEIgOiBcIkZsYXNoRW5lcmd5XCIsICAgICAgICAgICAgIC8vIFN0cm9iZSBlbmVyZ3kgaW4gQkNQU1xuICAgICAgICAweEEyMEMgOiBcIlNwYXRpYWxGcmVxdWVuY3lSZXNwb25zZVwiLCAgICAvL1xuICAgICAgICAweEEyMEUgOiBcIkZvY2FsUGxhbmVYUmVzb2x1dGlvblwiLCAgIC8vIE51bWJlciBvZiBwaXhlbHMgaW4gd2lkdGggZGlyZWN0aW9uIHBlciBGb2NhbFBsYW5lUmVzb2x1dGlvblVuaXRcbiAgICAgICAgMHhBMjBGIDogXCJGb2NhbFBsYW5lWVJlc29sdXRpb25cIiwgICAvLyBOdW1iZXIgb2YgcGl4ZWxzIGluIGhlaWdodCBkaXJlY3Rpb24gcGVyIEZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdFxuICAgICAgICAweEEyMTAgOiBcIkZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdFwiLCAgICAvLyBVbml0IGZvciBtZWFzdXJpbmcgRm9jYWxQbGFuZVhSZXNvbHV0aW9uIGFuZCBGb2NhbFBsYW5lWVJlc29sdXRpb25cbiAgICAgICAgMHhBMjE0IDogXCJTdWJqZWN0TG9jYXRpb25cIiwgICAgICAgICAvLyBMb2NhdGlvbiBvZiBzdWJqZWN0IGluIGltYWdlXG4gICAgICAgIDB4QTIxNSA6IFwiRXhwb3N1cmVJbmRleFwiLCAgICAgICAgICAgLy8gRXhwb3N1cmUgaW5kZXggc2VsZWN0ZWQgb24gY2FtZXJhXG4gICAgICAgIDB4QTIxNyA6IFwiU2Vuc2luZ01ldGhvZFwiLCAgICAgICAgICAgLy8gSW1hZ2Ugc2Vuc29yIHR5cGVcbiAgICAgICAgMHhBMzAwIDogXCJGaWxlU291cmNlXCIsICAgICAgICAgICAgICAvLyBJbWFnZSBzb3VyY2UgKDMgPT0gRFNDKVxuICAgICAgICAweEEzMDEgOiBcIlNjZW5lVHlwZVwiLCAgICAgICAgICAgICAgIC8vIFNjZW5lIHR5cGUgKDEgPT0gZGlyZWN0bHkgcGhvdG9ncmFwaGVkKVxuICAgICAgICAweEEzMDIgOiBcIkNGQVBhdHRlcm5cIiwgICAgICAgICAgICAgIC8vIENvbG9yIGZpbHRlciBhcnJheSBnZW9tZXRyaWMgcGF0dGVyblxuICAgICAgICAweEE0MDEgOiBcIkN1c3RvbVJlbmRlcmVkXCIsICAgICAgICAgIC8vIFNwZWNpYWwgcHJvY2Vzc2luZ1xuICAgICAgICAweEE0MDIgOiBcIkV4cG9zdXJlTW9kZVwiLCAgICAgICAgICAgIC8vIEV4cG9zdXJlIG1vZGVcbiAgICAgICAgMHhBNDAzIDogXCJXaGl0ZUJhbGFuY2VcIiwgICAgICAgICAgICAvLyAxID0gYXV0byB3aGl0ZSBiYWxhbmNlLCAyID0gbWFudWFsXG4gICAgICAgIDB4QTQwNCA6IFwiRGlnaXRhbFpvb21SYXRpb25cIiwgICAgICAgLy8gRGlnaXRhbCB6b29tIHJhdGlvXG4gICAgICAgIDB4QTQwNSA6IFwiRm9jYWxMZW5ndGhJbjM1bW1GaWxtXCIsICAgLy8gRXF1aXZhbGVudCBmb2FjbCBsZW5ndGggYXNzdW1pbmcgMzVtbSBmaWxtIGNhbWVyYSAoaW4gbW0pXG4gICAgICAgIDB4QTQwNiA6IFwiU2NlbmVDYXB0dXJlVHlwZVwiLCAgICAgICAgLy8gVHlwZSBvZiBzY2VuZVxuICAgICAgICAweEE0MDcgOiBcIkdhaW5Db250cm9sXCIsICAgICAgICAgICAgIC8vIERlZ3JlZSBvZiBvdmVyYWxsIGltYWdlIGdhaW4gYWRqdXN0bWVudFxuICAgICAgICAweEE0MDggOiBcIkNvbnRyYXN0XCIsICAgICAgICAgICAgICAgIC8vIERpcmVjdGlvbiBvZiBjb250cmFzdCBwcm9jZXNzaW5nIGFwcGxpZWQgYnkgY2FtZXJhXG4gICAgICAgIDB4QTQwOSA6IFwiU2F0dXJhdGlvblwiLCAgICAgICAgICAgICAgLy8gRGlyZWN0aW9uIG9mIHNhdHVyYXRpb24gcHJvY2Vzc2luZyBhcHBsaWVkIGJ5IGNhbWVyYVxuICAgICAgICAweEE0MEEgOiBcIlNoYXJwbmVzc1wiLCAgICAgICAgICAgICAgIC8vIERpcmVjdGlvbiBvZiBzaGFycG5lc3MgcHJvY2Vzc2luZyBhcHBsaWVkIGJ5IGNhbWVyYVxuICAgICAgICAweEE0MEIgOiBcIkRldmljZVNldHRpbmdEZXNjcmlwdGlvblwiLCAgICAvL1xuICAgICAgICAweEE0MEMgOiBcIlN1YmplY3REaXN0YW5jZVJhbmdlXCIsICAgIC8vIERpc3RhbmNlIHRvIHN1YmplY3RcblxuICAgICAgICAvLyBvdGhlciB0YWdzXG4gICAgICAgIDB4QTAwNSA6IFwiSW50ZXJvcGVyYWJpbGl0eUlGRFBvaW50ZXJcIixcbiAgICAgICAgMHhBNDIwIDogXCJJbWFnZVVuaXF1ZUlEXCIgICAgICAgICAgICAvLyBJZGVudGlmaWVyIGFzc2lnbmVkIHVuaXF1ZWx5IHRvIGVhY2ggaW1hZ2VcbiAgICB9O1xuXG4gICAgdmFyIFRpZmZUYWdzID0gRVhJRi5UaWZmVGFncyA9IHtcbiAgICAgICAgMHgwMTAwIDogXCJJbWFnZVdpZHRoXCIsXG4gICAgICAgIDB4MDEwMSA6IFwiSW1hZ2VIZWlnaHRcIixcbiAgICAgICAgMHg4NzY5IDogXCJFeGlmSUZEUG9pbnRlclwiLFxuICAgICAgICAweDg4MjUgOiBcIkdQU0luZm9JRkRQb2ludGVyXCIsXG4gICAgICAgIDB4QTAwNSA6IFwiSW50ZXJvcGVyYWJpbGl0eUlGRFBvaW50ZXJcIixcbiAgICAgICAgMHgwMTAyIDogXCJCaXRzUGVyU2FtcGxlXCIsXG4gICAgICAgIDB4MDEwMyA6IFwiQ29tcHJlc3Npb25cIixcbiAgICAgICAgMHgwMTA2IDogXCJQaG90b21ldHJpY0ludGVycHJldGF0aW9uXCIsXG4gICAgICAgIDB4MDExMiA6IFwiT3JpZW50YXRpb25cIixcbiAgICAgICAgMHgwMTE1IDogXCJTYW1wbGVzUGVyUGl4ZWxcIixcbiAgICAgICAgMHgwMTFDIDogXCJQbGFuYXJDb25maWd1cmF0aW9uXCIsXG4gICAgICAgIDB4MDIxMiA6IFwiWUNiQ3JTdWJTYW1wbGluZ1wiLFxuICAgICAgICAweDAyMTMgOiBcIllDYkNyUG9zaXRpb25pbmdcIixcbiAgICAgICAgMHgwMTFBIDogXCJYUmVzb2x1dGlvblwiLFxuICAgICAgICAweDAxMUIgOiBcIllSZXNvbHV0aW9uXCIsXG4gICAgICAgIDB4MDEyOCA6IFwiUmVzb2x1dGlvblVuaXRcIixcbiAgICAgICAgMHgwMTExIDogXCJTdHJpcE9mZnNldHNcIixcbiAgICAgICAgMHgwMTE2IDogXCJSb3dzUGVyU3RyaXBcIixcbiAgICAgICAgMHgwMTE3IDogXCJTdHJpcEJ5dGVDb3VudHNcIixcbiAgICAgICAgMHgwMjAxIDogXCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRcIixcbiAgICAgICAgMHgwMjAyIDogXCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGhcIixcbiAgICAgICAgMHgwMTJEIDogXCJUcmFuc2ZlckZ1bmN0aW9uXCIsXG4gICAgICAgIDB4MDEzRSA6IFwiV2hpdGVQb2ludFwiLFxuICAgICAgICAweDAxM0YgOiBcIlByaW1hcnlDaHJvbWF0aWNpdGllc1wiLFxuICAgICAgICAweDAyMTEgOiBcIllDYkNyQ29lZmZpY2llbnRzXCIsXG4gICAgICAgIDB4MDIxNCA6IFwiUmVmZXJlbmNlQmxhY2tXaGl0ZVwiLFxuICAgICAgICAweDAxMzIgOiBcIkRhdGVUaW1lXCIsXG4gICAgICAgIDB4MDEwRSA6IFwiSW1hZ2VEZXNjcmlwdGlvblwiLFxuICAgICAgICAweDAxMEYgOiBcIk1ha2VcIixcbiAgICAgICAgMHgwMTEwIDogXCJNb2RlbFwiLFxuICAgICAgICAweDAxMzEgOiBcIlNvZnR3YXJlXCIsXG4gICAgICAgIDB4MDEzQiA6IFwiQXJ0aXN0XCIsXG4gICAgICAgIDB4ODI5OCA6IFwiQ29weXJpZ2h0XCJcbiAgICB9O1xuXG4gICAgdmFyIEdQU1RhZ3MgPSBFWElGLkdQU1RhZ3MgPSB7XG4gICAgICAgIDB4MDAwMCA6IFwiR1BTVmVyc2lvbklEXCIsXG4gICAgICAgIDB4MDAwMSA6IFwiR1BTTGF0aXR1ZGVSZWZcIixcbiAgICAgICAgMHgwMDAyIDogXCJHUFNMYXRpdHVkZVwiLFxuICAgICAgICAweDAwMDMgOiBcIkdQU0xvbmdpdHVkZVJlZlwiLFxuICAgICAgICAweDAwMDQgOiBcIkdQU0xvbmdpdHVkZVwiLFxuICAgICAgICAweDAwMDUgOiBcIkdQU0FsdGl0dWRlUmVmXCIsXG4gICAgICAgIDB4MDAwNiA6IFwiR1BTQWx0aXR1ZGVcIixcbiAgICAgICAgMHgwMDA3IDogXCJHUFNUaW1lU3RhbXBcIixcbiAgICAgICAgMHgwMDA4IDogXCJHUFNTYXRlbGxpdGVzXCIsXG4gICAgICAgIDB4MDAwOSA6IFwiR1BTU3RhdHVzXCIsXG4gICAgICAgIDB4MDAwQSA6IFwiR1BTTWVhc3VyZU1vZGVcIixcbiAgICAgICAgMHgwMDBCIDogXCJHUFNET1BcIixcbiAgICAgICAgMHgwMDBDIDogXCJHUFNTcGVlZFJlZlwiLFxuICAgICAgICAweDAwMEQgOiBcIkdQU1NwZWVkXCIsXG4gICAgICAgIDB4MDAwRSA6IFwiR1BTVHJhY2tSZWZcIixcbiAgICAgICAgMHgwMDBGIDogXCJHUFNUcmFja1wiLFxuICAgICAgICAweDAwMTAgOiBcIkdQU0ltZ0RpcmVjdGlvblJlZlwiLFxuICAgICAgICAweDAwMTEgOiBcIkdQU0ltZ0RpcmVjdGlvblwiLFxuICAgICAgICAweDAwMTIgOiBcIkdQU01hcERhdHVtXCIsXG4gICAgICAgIDB4MDAxMyA6IFwiR1BTRGVzdExhdGl0dWRlUmVmXCIsXG4gICAgICAgIDB4MDAxNCA6IFwiR1BTRGVzdExhdGl0dWRlXCIsXG4gICAgICAgIDB4MDAxNSA6IFwiR1BTRGVzdExvbmdpdHVkZVJlZlwiLFxuICAgICAgICAweDAwMTYgOiBcIkdQU0Rlc3RMb25naXR1ZGVcIixcbiAgICAgICAgMHgwMDE3IDogXCJHUFNEZXN0QmVhcmluZ1JlZlwiLFxuICAgICAgICAweDAwMTggOiBcIkdQU0Rlc3RCZWFyaW5nXCIsXG4gICAgICAgIDB4MDAxOSA6IFwiR1BTRGVzdERpc3RhbmNlUmVmXCIsXG4gICAgICAgIDB4MDAxQSA6IFwiR1BTRGVzdERpc3RhbmNlXCIsXG4gICAgICAgIDB4MDAxQiA6IFwiR1BTUHJvY2Vzc2luZ01ldGhvZFwiLFxuICAgICAgICAweDAwMUMgOiBcIkdQU0FyZWFJbmZvcm1hdGlvblwiLFxuICAgICAgICAweDAwMUQgOiBcIkdQU0RhdGVTdGFtcFwiLFxuICAgICAgICAweDAwMUUgOiBcIkdQU0RpZmZlcmVudGlhbFwiXG4gICAgfTtcblxuICAgICAvLyBFWElGIDIuMyBTcGVjXG4gICAgdmFyIElGRDFUYWdzID0gRVhJRi5JRkQxVGFncyA9IHtcbiAgICAgICAgMHgwMTAwOiBcIkltYWdlV2lkdGhcIixcbiAgICAgICAgMHgwMTAxOiBcIkltYWdlSGVpZ2h0XCIsXG4gICAgICAgIDB4MDEwMjogXCJCaXRzUGVyU2FtcGxlXCIsXG4gICAgICAgIDB4MDEwMzogXCJDb21wcmVzc2lvblwiLFxuICAgICAgICAweDAxMDY6IFwiUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvblwiLFxuICAgICAgICAweDAxMTE6IFwiU3RyaXBPZmZzZXRzXCIsXG4gICAgICAgIDB4MDExMjogXCJPcmllbnRhdGlvblwiLFxuICAgICAgICAweDAxMTU6IFwiU2FtcGxlc1BlclBpeGVsXCIsXG4gICAgICAgIDB4MDExNjogXCJSb3dzUGVyU3RyaXBcIixcbiAgICAgICAgMHgwMTE3OiBcIlN0cmlwQnl0ZUNvdW50c1wiLFxuICAgICAgICAweDAxMUE6IFwiWFJlc29sdXRpb25cIixcbiAgICAgICAgMHgwMTFCOiBcIllSZXNvbHV0aW9uXCIsXG4gICAgICAgIDB4MDExQzogXCJQbGFuYXJDb25maWd1cmF0aW9uXCIsXG4gICAgICAgIDB4MDEyODogXCJSZXNvbHV0aW9uVW5pdFwiLFxuICAgICAgICAweDAyMDE6IFwiSnBlZ0lGT2Zmc2V0XCIsICAgIC8vIFdoZW4gaW1hZ2UgZm9ybWF0IGlzIEpQRUcsIHRoaXMgdmFsdWUgc2hvdyBvZmZzZXQgdG8gSlBFRyBkYXRhIHN0b3JlZC4oYWthIFwiVGh1bWJuYWlsT2Zmc2V0XCIgb3IgXCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRcIilcbiAgICAgICAgMHgwMjAyOiBcIkpwZWdJRkJ5dGVDb3VudFwiLCAvLyBXaGVuIGltYWdlIGZvcm1hdCBpcyBKUEVHLCB0aGlzIHZhbHVlIHNob3dzIGRhdGEgc2l6ZSBvZiBKUEVHIGltYWdlIChha2EgXCJUaHVtYm5haWxMZW5ndGhcIiBvciBcIkpQRUdJbnRlcmNoYW5nZUZvcm1hdExlbmd0aFwiKVxuICAgICAgICAweDAyMTE6IFwiWUNiQ3JDb2VmZmljaWVudHNcIixcbiAgICAgICAgMHgwMjEyOiBcIllDYkNyU3ViU2FtcGxpbmdcIixcbiAgICAgICAgMHgwMjEzOiBcIllDYkNyUG9zaXRpb25pbmdcIixcbiAgICAgICAgMHgwMjE0OiBcIlJlZmVyZW5jZUJsYWNrV2hpdGVcIlxuICAgIH07XG5cbiAgICB2YXIgU3RyaW5nVmFsdWVzID0gRVhJRi5TdHJpbmdWYWx1ZXMgPSB7XG4gICAgICAgIEV4cG9zdXJlUHJvZ3JhbSA6IHtcbiAgICAgICAgICAgIDAgOiBcIk5vdCBkZWZpbmVkXCIsXG4gICAgICAgICAgICAxIDogXCJNYW51YWxcIixcbiAgICAgICAgICAgIDIgOiBcIk5vcm1hbCBwcm9ncmFtXCIsXG4gICAgICAgICAgICAzIDogXCJBcGVydHVyZSBwcmlvcml0eVwiLFxuICAgICAgICAgICAgNCA6IFwiU2h1dHRlciBwcmlvcml0eVwiLFxuICAgICAgICAgICAgNSA6IFwiQ3JlYXRpdmUgcHJvZ3JhbVwiLFxuICAgICAgICAgICAgNiA6IFwiQWN0aW9uIHByb2dyYW1cIixcbiAgICAgICAgICAgIDcgOiBcIlBvcnRyYWl0IG1vZGVcIixcbiAgICAgICAgICAgIDggOiBcIkxhbmRzY2FwZSBtb2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgTWV0ZXJpbmdNb2RlIDoge1xuICAgICAgICAgICAgMCA6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgMSA6IFwiQXZlcmFnZVwiLFxuICAgICAgICAgICAgMiA6IFwiQ2VudGVyV2VpZ2h0ZWRBdmVyYWdlXCIsXG4gICAgICAgICAgICAzIDogXCJTcG90XCIsXG4gICAgICAgICAgICA0IDogXCJNdWx0aVNwb3RcIixcbiAgICAgICAgICAgIDUgOiBcIlBhdHRlcm5cIixcbiAgICAgICAgICAgIDYgOiBcIlBhcnRpYWxcIixcbiAgICAgICAgICAgIDI1NSA6IFwiT3RoZXJcIlxuICAgICAgICB9LFxuICAgICAgICBMaWdodFNvdXJjZSA6IHtcbiAgICAgICAgICAgIDAgOiBcIlVua25vd25cIixcbiAgICAgICAgICAgIDEgOiBcIkRheWxpZ2h0XCIsXG4gICAgICAgICAgICAyIDogXCJGbHVvcmVzY2VudFwiLFxuICAgICAgICAgICAgMyA6IFwiVHVuZ3N0ZW4gKGluY2FuZGVzY2VudCBsaWdodClcIixcbiAgICAgICAgICAgIDQgOiBcIkZsYXNoXCIsXG4gICAgICAgICAgICA5IDogXCJGaW5lIHdlYXRoZXJcIixcbiAgICAgICAgICAgIDEwIDogXCJDbG91ZHkgd2VhdGhlclwiLFxuICAgICAgICAgICAgMTEgOiBcIlNoYWRlXCIsXG4gICAgICAgICAgICAxMiA6IFwiRGF5bGlnaHQgZmx1b3Jlc2NlbnQgKEQgNTcwMCAtIDcxMDBLKVwiLFxuICAgICAgICAgICAgMTMgOiBcIkRheSB3aGl0ZSBmbHVvcmVzY2VudCAoTiA0NjAwIC0gNTQwMEspXCIsXG4gICAgICAgICAgICAxNCA6IFwiQ29vbCB3aGl0ZSBmbHVvcmVzY2VudCAoVyAzOTAwIC0gNDUwMEspXCIsXG4gICAgICAgICAgICAxNSA6IFwiV2hpdGUgZmx1b3Jlc2NlbnQgKFdXIDMyMDAgLSAzNzAwSylcIixcbiAgICAgICAgICAgIDE3IDogXCJTdGFuZGFyZCBsaWdodCBBXCIsXG4gICAgICAgICAgICAxOCA6IFwiU3RhbmRhcmQgbGlnaHQgQlwiLFxuICAgICAgICAgICAgMTkgOiBcIlN0YW5kYXJkIGxpZ2h0IENcIixcbiAgICAgICAgICAgIDIwIDogXCJENTVcIixcbiAgICAgICAgICAgIDIxIDogXCJENjVcIixcbiAgICAgICAgICAgIDIyIDogXCJENzVcIixcbiAgICAgICAgICAgIDIzIDogXCJENTBcIixcbiAgICAgICAgICAgIDI0IDogXCJJU08gc3R1ZGlvIHR1bmdzdGVuXCIsXG4gICAgICAgICAgICAyNTUgOiBcIk90aGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAgRmxhc2ggOiB7XG4gICAgICAgICAgICAweDAwMDAgOiBcIkZsYXNoIGRpZCBub3QgZmlyZVwiLFxuICAgICAgICAgICAgMHgwMDAxIDogXCJGbGFzaCBmaXJlZFwiLFxuICAgICAgICAgICAgMHgwMDA1IDogXCJTdHJvYmUgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDA3IDogXCJTdHJvYmUgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwMDkgOiBcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDAwRCA6IFwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDBGIDogXCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDAxMCA6IFwiRmxhc2ggZGlkIG5vdCBmaXJlLCBjb21wdWxzb3J5IGZsYXNoIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDAxOCA6IFwiRmxhc2ggZGlkIG5vdCBmaXJlLCBhdXRvIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDAxOSA6IFwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDFEIDogXCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwMUYgOiBcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDIwIDogXCJObyBmbGFzaCBmdW5jdGlvblwiLFxuICAgICAgICAgICAgMHgwMDQxIDogXCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDQ1IDogXCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDQ3IDogXCJGbGFzaCBmaXJlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IGRldGVjdGVkXCIsXG4gICAgICAgICAgICAweDAwNDkgOiBcIkZsYXNoIGZpcmVkLCBjb21wdWxzb3J5IGZsYXNoIG1vZGUsIHJlZC1leWUgcmVkdWN0aW9uIG1vZGVcIixcbiAgICAgICAgICAgIDB4MDA0RCA6IFwiRmxhc2ggZmlyZWQsIGNvbXB1bHNvcnkgZmxhc2ggbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZSwgcmV0dXJuIGxpZ2h0IG5vdCBkZXRlY3RlZFwiLFxuICAgICAgICAgICAgMHgwMDRGIDogXCJGbGFzaCBmaXJlZCwgY29tcHVsc29yeSBmbGFzaCBtb2RlLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlLCByZXR1cm4gbGlnaHQgZGV0ZWN0ZWRcIixcbiAgICAgICAgICAgIDB4MDA1OSA6IFwiRmxhc2ggZmlyZWQsIGF1dG8gbW9kZSwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiLFxuICAgICAgICAgICAgMHgwMDVEIDogXCJGbGFzaCBmaXJlZCwgYXV0byBtb2RlLCByZXR1cm4gbGlnaHQgbm90IGRldGVjdGVkLCByZWQtZXllIHJlZHVjdGlvbiBtb2RlXCIsXG4gICAgICAgICAgICAweDAwNUYgOiBcIkZsYXNoIGZpcmVkLCBhdXRvIG1vZGUsIHJldHVybiBsaWdodCBkZXRlY3RlZCwgcmVkLWV5ZSByZWR1Y3Rpb24gbW9kZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFNlbnNpbmdNZXRob2QgOiB7XG4gICAgICAgICAgICAxIDogXCJOb3QgZGVmaW5lZFwiLFxuICAgICAgICAgICAgMiA6IFwiT25lLWNoaXAgY29sb3IgYXJlYSBzZW5zb3JcIixcbiAgICAgICAgICAgIDMgOiBcIlR3by1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsXG4gICAgICAgICAgICA0IDogXCJUaHJlZS1jaGlwIGNvbG9yIGFyZWEgc2Vuc29yXCIsXG4gICAgICAgICAgICA1IDogXCJDb2xvciBzZXF1ZW50aWFsIGFyZWEgc2Vuc29yXCIsXG4gICAgICAgICAgICA3IDogXCJUcmlsaW5lYXIgc2Vuc29yXCIsXG4gICAgICAgICAgICA4IDogXCJDb2xvciBzZXF1ZW50aWFsIGxpbmVhciBzZW5zb3JcIlxuICAgICAgICB9LFxuICAgICAgICBTY2VuZUNhcHR1cmVUeXBlIDoge1xuICAgICAgICAgICAgMCA6IFwiU3RhbmRhcmRcIixcbiAgICAgICAgICAgIDEgOiBcIkxhbmRzY2FwZVwiLFxuICAgICAgICAgICAgMiA6IFwiUG9ydHJhaXRcIixcbiAgICAgICAgICAgIDMgOiBcIk5pZ2h0IHNjZW5lXCJcbiAgICAgICAgfSxcbiAgICAgICAgU2NlbmVUeXBlIDoge1xuICAgICAgICAgICAgMSA6IFwiRGlyZWN0bHkgcGhvdG9ncmFwaGVkXCJcbiAgICAgICAgfSxcbiAgICAgICAgQ3VzdG9tUmVuZGVyZWQgOiB7XG4gICAgICAgICAgICAwIDogXCJOb3JtYWwgcHJvY2Vzc1wiLFxuICAgICAgICAgICAgMSA6IFwiQ3VzdG9tIHByb2Nlc3NcIlxuICAgICAgICB9LFxuICAgICAgICBXaGl0ZUJhbGFuY2UgOiB7XG4gICAgICAgICAgICAwIDogXCJBdXRvIHdoaXRlIGJhbGFuY2VcIixcbiAgICAgICAgICAgIDEgOiBcIk1hbnVhbCB3aGl0ZSBiYWxhbmNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgR2FpbkNvbnRyb2wgOiB7XG4gICAgICAgICAgICAwIDogXCJOb25lXCIsXG4gICAgICAgICAgICAxIDogXCJMb3cgZ2FpbiB1cFwiLFxuICAgICAgICAgICAgMiA6IFwiSGlnaCBnYWluIHVwXCIsXG4gICAgICAgICAgICAzIDogXCJMb3cgZ2FpbiBkb3duXCIsXG4gICAgICAgICAgICA0IDogXCJIaWdoIGdhaW4gZG93blwiXG4gICAgICAgIH0sXG4gICAgICAgIENvbnRyYXN0IDoge1xuICAgICAgICAgICAgMCA6IFwiTm9ybWFsXCIsXG4gICAgICAgICAgICAxIDogXCJTb2Z0XCIsXG4gICAgICAgICAgICAyIDogXCJIYXJkXCJcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbiA6IHtcbiAgICAgICAgICAgIDAgOiBcIk5vcm1hbFwiLFxuICAgICAgICAgICAgMSA6IFwiTG93IHNhdHVyYXRpb25cIixcbiAgICAgICAgICAgIDIgOiBcIkhpZ2ggc2F0dXJhdGlvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFNoYXJwbmVzcyA6IHtcbiAgICAgICAgICAgIDAgOiBcIk5vcm1hbFwiLFxuICAgICAgICAgICAgMSA6IFwiU29mdFwiLFxuICAgICAgICAgICAgMiA6IFwiSGFyZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFN1YmplY3REaXN0YW5jZVJhbmdlIDoge1xuICAgICAgICAgICAgMCA6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgMSA6IFwiTWFjcm9cIixcbiAgICAgICAgICAgIDIgOiBcIkNsb3NlIHZpZXdcIixcbiAgICAgICAgICAgIDMgOiBcIkRpc3RhbnQgdmlld1wiXG4gICAgICAgIH0sXG4gICAgICAgIEZpbGVTb3VyY2UgOiB7XG4gICAgICAgICAgICAzIDogXCJEU0NcIlxuICAgICAgICB9LFxuXG4gICAgICAgIENvbXBvbmVudHMgOiB7XG4gICAgICAgICAgICAwIDogXCJcIixcbiAgICAgICAgICAgIDEgOiBcIllcIixcbiAgICAgICAgICAgIDIgOiBcIkNiXCIsXG4gICAgICAgICAgICAzIDogXCJDclwiLFxuICAgICAgICAgICAgNCA6IFwiUlwiLFxuICAgICAgICAgICAgNSA6IFwiR1wiLFxuICAgICAgICAgICAgNiA6IFwiQlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChcIm9uXCIgKyBldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbWFnZUhhc0RhdGEoaW1nKSB7XG4gICAgICAgIHJldHVybiAhIShpbWcuZXhpZmRhdGEpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjQsIGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgYmFzZTY0Lm1hdGNoKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvbWkpWzFdIHx8ICcnOyAvLyBlLmcuICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC4uLicgPT4gJ2ltYWdlL2pwZWcnXG4gICAgICAgIGJhc2U2NCA9IGJhc2U2NC5yZXBsYWNlKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvZ21pLCAnJyk7XG4gICAgICAgIHZhciBiaW5hcnkgPSBhdG9iKGJhc2U2NCk7XG4gICAgICAgIHZhciBsZW4gPSBiaW5hcnkubGVuZ3RoO1xuICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbik7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmlld1tpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb2JqZWN0VVJMVG9CbG9iKHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgaHR0cC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIGh0dHAucmVzcG9uc2VUeXBlID0gXCJibG9iXCI7XG4gICAgICAgIGh0dHAub25sb2FkID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCB8fCB0aGlzLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBodHRwLnNlbmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbWFnZURhdGEoaW1nLCBjYWxsYmFjaykge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVCaW5hcnlGaWxlKGJpbkZpbGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZmluZEVYSUZpbkpQRUcoYmluRmlsZSk7XG4gICAgICAgICAgICBpbWcuZXhpZmRhdGEgPSBkYXRhIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGlwdGNkYXRhID0gZmluZElQVENpbkpQRUcoYmluRmlsZSk7XG4gICAgICAgICAgICBpbWcuaXB0Y2RhdGEgPSBpcHRjZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGlmIChFWElGLmlzWG1wRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgdmFyIHhtcGRhdGE9IGZpbmRYTVBpbkpQRUcoYmluRmlsZSk7XG4gICAgICAgICAgICAgICBpbWcueG1wZGF0YSA9IHhtcGRhdGEgfHwge307ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGltZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1nLnNyYykge1xuICAgICAgICAgICAgaWYgKC9eZGF0YVxcOi9pLnRlc3QoaW1nLnNyYykpIHsgLy8gRGF0YSBVUklcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSBiYXNlNjRUb0FycmF5QnVmZmVyKGltZy5zcmMpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUJpbmFyeUZpbGUoYXJyYXlCdWZmZXIpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKC9eYmxvYlxcOi9pLnRlc3QoaW1nLnNyYykpIHsgLy8gT2JqZWN0IFVSTFxuICAgICAgICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmluYXJ5RmlsZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb2JqZWN0VVJMVG9CbG9iKGltZy5zcmMsIGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgaHR0cC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCB8fCB0aGlzLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQmluYXJ5RmlsZShodHRwLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiQ291bGQgbm90IGxvYWQgaW1hZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBodHRwID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGh0dHAub3BlbihcIkdFVFwiLCBpbWcuc3JjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBodHRwLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgICAgICAgICBodHRwLnNlbmQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5GaWxlUmVhZGVyICYmIChpbWcgaW5zdGFuY2VvZiBzZWxmLkJsb2IgfHwgaW1nIGluc3RhbmNlb2Ygc2VsZi5GaWxlKSkge1xuICAgICAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIkdvdCBmaWxlIG9mIGxlbmd0aCBcIiArIGUudGFyZ2V0LnJlc3VsdC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVCaW5hcnlGaWxlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGltZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kRVhJRmluSlBFRyhmaWxlKSB7XG4gICAgICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhmaWxlKTtcblxuICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiR290IGZpbGUgb2YgbGVuZ3RoIFwiICsgZmlsZS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgaWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPSAweEZGKSB8fCAoZGF0YVZpZXcuZ2V0VWludDgoMSkgIT0gMHhEOCkpIHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgYSB2YWxpZCBKUEVHXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSB2YWxpZCBqcGVnXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gMixcbiAgICAgICAgICAgIGxlbmd0aCA9IGZpbGUuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIG1hcmtlcjtcblxuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSAhPSAweEZGKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIG1hcmtlciBhdCBvZmZzZXQgXCIgKyBvZmZzZXQgKyBcIiwgZm91bmQ6IFwiICsgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSB2YWxpZCBtYXJrZXIsIHNvbWV0aGluZyBpcyB3cm9uZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXJrZXIgPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAxKTtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2cobWFya2VyKTtcblxuICAgICAgICAgICAgLy8gd2UgY291bGQgaW1wbGVtZW50IGhhbmRsaW5nIGZvciBvdGhlciBtYXJrZXJzIGhlcmUsXG4gICAgICAgICAgICAvLyBidXQgd2UncmUgb25seSBsb29raW5nIGZvciAweEZGRTEgZm9yIEVYSUYgZGF0YVxuXG4gICAgICAgICAgICBpZiAobWFya2VyID09IDIyNSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJGb3VuZCAweEZGRTEgbWFya2VyXCIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRFWElGRGF0YShkYXRhVmlldywgb2Zmc2V0ICsgNCwgZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDIpIC0gMik7XG5cbiAgICAgICAgICAgICAgICAvLyBvZmZzZXQgKz0gMiArIGZpbGUuZ2V0U2hvcnRBdChvZmZzZXQrMiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDIgKyBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0KzIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRJUFRDaW5KUEVHKGZpbGUpIHtcbiAgICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGZpbGUpO1xuXG4gICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIgKyBmaWxlLmJ5dGVMZW5ndGgpO1xuICAgICAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQ4KDApICE9IDB4RkYpIHx8IChkYXRhVmlldy5nZXRVaW50OCgxKSAhPSAweEQ4KSkge1xuICAgICAgICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZyhcIk5vdCBhIHZhbGlkIEpQRUdcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCBhIHZhbGlkIGpwZWdcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSAyLFxuICAgICAgICAgICAgbGVuZ3RoID0gZmlsZS5ieXRlTGVuZ3RoO1xuXG5cbiAgICAgICAgdmFyIGlzRmllbGRTZWdtZW50U3RhcnQgPSBmdW5jdGlvbihkYXRhVmlldywgb2Zmc2V0KXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSA9PT0gMHgzOCAmJlxuICAgICAgICAgICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCsxKSA9PT0gMHg0MiAmJlxuICAgICAgICAgICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCsyKSA9PT0gMHg0OSAmJlxuICAgICAgICAgICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCszKSA9PT0gMHg0RCAmJlxuICAgICAgICAgICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCs0KSA9PT0gMHgwNCAmJlxuICAgICAgICAgICAgICAgIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCs1KSA9PT0gMHgwNFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGlmICggaXNGaWVsZFNlZ21lbnRTdGFydChkYXRhVmlldywgb2Zmc2V0ICkpe1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBsZW5ndGggb2YgdGhlIG5hbWUgaGVhZGVyICh3aGljaCBpcyBwYWRkZWQgdG8gYW4gZXZlbiBudW1iZXIgb2YgYnl0ZXMpXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVIZWFkZXJMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrNyk7XG4gICAgICAgICAgICAgICAgaWYobmFtZUhlYWRlckxlbmd0aCAlIDIgIT09IDApIG5hbWVIZWFkZXJMZW5ndGggKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgcHJlIHBob3Rvc2hvcCA2IGZvcm1hdFxuICAgICAgICAgICAgICAgIGlmKG5hbWVIZWFkZXJMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWx3YXlzIDRcbiAgICAgICAgICAgICAgICAgICAgbmFtZUhlYWRlckxlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gb2Zmc2V0ICsgOCArIG5hbWVIZWFkZXJMZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25MZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0ICsgNiArIG5hbWVIZWFkZXJMZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRJUFRDRGF0YShmaWxlLCBzdGFydE9mZnNldCwgc2VjdGlvbkxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIE5vdCB0aGUgbWFya2VyLCBjb250aW51ZSBzZWFyY2hpbmdcbiAgICAgICAgICAgIG9mZnNldCsrO1xuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICB2YXIgSXB0Y0ZpZWxkTWFwID0ge1xuICAgICAgICAweDc4IDogJ2NhcHRpb24nLFxuICAgICAgICAweDZFIDogJ2NyZWRpdCcsXG4gICAgICAgIDB4MTkgOiAna2V5d29yZHMnLFxuICAgICAgICAweDM3IDogJ2RhdGVDcmVhdGVkJyxcbiAgICAgICAgMHg1MCA6ICdieWxpbmUnLFxuICAgICAgICAweDU1IDogJ2J5bGluZVRpdGxlJyxcbiAgICAgICAgMHg3QSA6ICdjYXB0aW9uV3JpdGVyJyxcbiAgICAgICAgMHg2OSA6ICdoZWFkbGluZScsXG4gICAgICAgIDB4NzQgOiAnY29weXJpZ2h0JyxcbiAgICAgICAgMHgwRiA6ICdjYXRlZ29yeSdcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlYWRJUFRDRGF0YShmaWxlLCBzdGFydE9mZnNldCwgc2VjdGlvbkxlbmd0aCl7XG4gICAgICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhmaWxlKTtcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgdmFyIGZpZWxkVmFsdWUsIGZpZWxkTmFtZSwgZGF0YVNpemUsIHNlZ21lbnRUeXBlLCBzZWdtZW50U2l6ZTtcbiAgICAgICAgdmFyIHNlZ21lbnRTdGFydFBvcyA9IHN0YXJ0T2Zmc2V0O1xuICAgICAgICB3aGlsZShzZWdtZW50U3RhcnRQb3MgPCBzdGFydE9mZnNldCtzZWN0aW9uTGVuZ3RoKSB7XG4gICAgICAgICAgICBpZihkYXRhVmlldy5nZXRVaW50OChzZWdtZW50U3RhcnRQb3MpID09PSAweDFDICYmIGRhdGFWaWV3LmdldFVpbnQ4KHNlZ21lbnRTdGFydFBvcysxKSA9PT0gMHgwMil7XG4gICAgICAgICAgICAgICAgc2VnbWVudFR5cGUgPSBkYXRhVmlldy5nZXRVaW50OChzZWdtZW50U3RhcnRQb3MrMik7XG4gICAgICAgICAgICAgICAgaWYoc2VnbWVudFR5cGUgaW4gSXB0Y0ZpZWxkTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFTaXplID0gZGF0YVZpZXcuZ2V0SW50MTYoc2VnbWVudFN0YXJ0UG9zKzMpO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50U2l6ZSA9IGRhdGFTaXplICsgNTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gSXB0Y0ZpZWxkTWFwW3NlZ21lbnRUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGdldFN0cmluZ0Zyb21EQihkYXRhVmlldywgc2VnbWVudFN0YXJ0UG9zKzUsIGRhdGFTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBzdG9yZWQgYSB2YWx1ZSB3aXRoIHRoaXMgbmFtZVxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbHVlIGFscmVhZHkgc3RvcmVkIHdpdGggdGhpcyBuYW1lLCBjcmVhdGUgbXVsdGl2YWx1ZSBmaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YVtmaWVsZE5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ZpZWxkTmFtZV0ucHVzaChmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZmllbGROYW1lXSA9IFtkYXRhW2ZpZWxkTmFtZV0sIGZpZWxkVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtmaWVsZE5hbWVdID0gZmllbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VnbWVudFN0YXJ0UG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHJlYWRUYWdzKGZpbGUsIHRpZmZTdGFydCwgZGlyU3RhcnQsIHN0cmluZ3MsIGJpZ0VuZCkge1xuICAgICAgICB2YXIgZW50cmllcyA9IGZpbGUuZ2V0VWludDE2KGRpclN0YXJ0LCAhYmlnRW5kKSxcbiAgICAgICAgICAgIHRhZ3MgPSB7fSxcbiAgICAgICAgICAgIGVudHJ5T2Zmc2V0LCB0YWcsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaT0wO2k8ZW50cmllcztpKyspIHtcbiAgICAgICAgICAgIGVudHJ5T2Zmc2V0ID0gZGlyU3RhcnQgKyBpKjEyICsgMjtcbiAgICAgICAgICAgIHRhZyA9IHN0cmluZ3NbZmlsZS5nZXRVaW50MTYoZW50cnlPZmZzZXQsICFiaWdFbmQpXTtcbiAgICAgICAgICAgIGlmICghdGFnICYmIGRlYnVnKSBjb25zb2xlLmxvZyhcIlVua25vd24gdGFnOiBcIiArIGZpbGUuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKSk7XG4gICAgICAgICAgICB0YWdzW3RhZ10gPSByZWFkVGFnVmFsdWUoZmlsZSwgZW50cnlPZmZzZXQsIHRpZmZTdGFydCwgZGlyU3RhcnQsIGJpZ0VuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZWFkVGFnVmFsdWUoZmlsZSwgZW50cnlPZmZzZXQsIHRpZmZTdGFydCwgZGlyU3RhcnQsIGJpZ0VuZCkge1xuICAgICAgICB2YXIgdHlwZSA9IGZpbGUuZ2V0VWludDE2KGVudHJ5T2Zmc2V0KzIsICFiaWdFbmQpLFxuICAgICAgICAgICAgbnVtVmFsdWVzID0gZmlsZS5nZXRVaW50MzIoZW50cnlPZmZzZXQrNCwgIWJpZ0VuZCksXG4gICAgICAgICAgICB2YWx1ZU9mZnNldCA9IGZpbGUuZ2V0VWludDMyKGVudHJ5T2Zmc2V0KzgsICFiaWdFbmQpICsgdGlmZlN0YXJ0LFxuICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgdmFscywgdmFsLCBuLFxuICAgICAgICAgICAgbnVtZXJhdG9yLCBkZW5vbWluYXRvcjtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gYnl0ZSwgOC1iaXQgdW5zaWduZWQgaW50XG4gICAgICAgICAgICBjYXNlIDc6IC8vIHVuZGVmaW5lZCwgOC1iaXQgYnl0ZSwgdmFsdWUgZGVwZW5kaW5nIG9uIGZpZWxkXG4gICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmdldFVpbnQ4KGVudHJ5T2Zmc2V0ICsgOCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbnVtVmFsdWVzID4gNCA/IHZhbHVlT2Zmc2V0IDogKGVudHJ5T2Zmc2V0ICsgOCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuPTA7bjxudW1WYWx1ZXM7bisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dID0gZmlsZS5nZXRVaW50OChvZmZzZXQgKyBuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgMjogLy8gYXNjaWksIDgtYml0IGJ5dGVcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBudW1WYWx1ZXMgPiA0ID8gdmFsdWVPZmZzZXQgOiAoZW50cnlPZmZzZXQgKyA4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbURCKGZpbGUsIG9mZnNldCwgbnVtVmFsdWVzLTEpO1xuXG4gICAgICAgICAgICBjYXNlIDM6IC8vIHNob3J0LCAxNiBiaXQgaW50XG4gICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLmdldFVpbnQxNihlbnRyeU9mZnNldCArIDgsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG51bVZhbHVlcyA+IDIgPyB2YWx1ZU9mZnNldCA6IChlbnRyeU9mZnNldCArIDgpO1xuICAgICAgICAgICAgICAgICAgICB2YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobj0wO248bnVtVmFsdWVzO24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXSA9IGZpbGUuZ2V0VWludDE2KG9mZnNldCArIDIqbiwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6IC8vIGxvbmcsIDMyIGJpdCBpbnRcbiAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuZ2V0VWludDMyKGVudHJ5T2Zmc2V0ICsgOCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG49MDtuPG51bVZhbHVlcztuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0gPSBmaWxlLmdldFVpbnQzMih2YWx1ZU9mZnNldCArIDQqbiwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDU6ICAgIC8vIHJhdGlvbmFsID0gdHdvIGxvbmcgdmFsdWVzLCBmaXJzdCBpcyBudW1lcmF0b3IsIHNlY29uZCBpcyBkZW5vbWluYXRvclxuICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBudW1lcmF0b3IgPSBmaWxlLmdldFVpbnQzMih2YWx1ZU9mZnNldCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbm9taW5hdG9yID0gZmlsZS5nZXRVaW50MzIodmFsdWVPZmZzZXQrNCwgIWJpZ0VuZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IG5ldyBOdW1iZXIobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB2YWwubnVtZXJhdG9yID0gbnVtZXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICB2YWwuZGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobj0wO248bnVtVmFsdWVzO24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJhdG9yID0gZmlsZS5nZXRVaW50MzIodmFsdWVPZmZzZXQgKyA4Km4sICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVub21pbmF0b3IgPSBmaWxlLmdldFVpbnQzMih2YWx1ZU9mZnNldCs0ICsgOCpuLCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0gPSBuZXcgTnVtYmVyKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHNbbl0ubnVtZXJhdG9yID0gbnVtZXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXS5kZW5vbWluYXRvciA9IGRlbm9taW5hdG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSA5OiAvLyBzbG9uZywgMzIgYml0IHNpZ25lZCBpbnRcbiAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuZ2V0SW50MzIoZW50cnlPZmZzZXQgKyA4LCAhYmlnRW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobj0wO248bnVtVmFsdWVzO24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsc1tuXSA9IGZpbGUuZ2V0SW50MzIodmFsdWVPZmZzZXQgKyA0Km4sICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAxMDogLy8gc2lnbmVkIHJhdGlvbmFsLCB0d28gc2xvbmdzLCBmaXJzdCBpcyBudW1lcmF0b3IsIHNlY29uZCBpcyBkZW5vbWluYXRvclxuICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5nZXRJbnQzMih2YWx1ZU9mZnNldCwgIWJpZ0VuZCkgLyBmaWxlLmdldEludDMyKHZhbHVlT2Zmc2V0KzQsICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuPTA7bjxudW1WYWx1ZXM7bisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzW25dID0gZmlsZS5nZXRJbnQzMih2YWx1ZU9mZnNldCArIDgqbiwgIWJpZ0VuZCkgLyBmaWxlLmdldEludDMyKHZhbHVlT2Zmc2V0KzQgKyA4Km4sICFiaWdFbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogR2l2ZW4gYW4gSUZEIChJbWFnZSBGaWxlIERpcmVjdG9yeSkgc3RhcnQgb2Zmc2V0XG4gICAgKiByZXR1cm5zIGFuIG9mZnNldCB0byBuZXh0IElGRCBvciAwIGlmIGl0J3MgdGhlIGxhc3QgSUZELlxuICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TmV4dElGRE9mZnNldChkYXRhVmlldywgZGlyU3RhcnQsIGJpZ0VuZCl7XG4gICAgICAgIC8vdGhlIGZpcnN0IDJieXRlcyBtZWFucyB0aGUgbnVtYmVyIG9mIGRpcmVjdG9yeSBlbnRyaWVzIGNvbnRhaW5zIGluIHRoaXMgSUZEXG4gICAgICAgIHZhciBlbnRyaWVzID0gZGF0YVZpZXcuZ2V0VWludDE2KGRpclN0YXJ0LCAhYmlnRW5kKTtcblxuICAgICAgICAvLyBBZnRlciBsYXN0IGRpcmVjdG9yeSBlbnRyeSwgdGhlcmUgaXMgYSA0Ynl0ZXMgb2YgZGF0YSxcbiAgICAgICAgLy8gaXQgbWVhbnMgYW4gb2Zmc2V0IHRvIG5leHQgSUZELlxuICAgICAgICAvLyBJZiBpdHMgdmFsdWUgaXMgJzB4MDAwMDAwMDAnLCBpdCBtZWFucyB0aGlzIGlzIHRoZSBsYXN0IElGRCBhbmQgdGhlcmUgaXMgbm8gbGlua2VkIElGRC5cblxuICAgICAgICByZXR1cm4gZGF0YVZpZXcuZ2V0VWludDMyKGRpclN0YXJ0ICsgMiArIGVudHJpZXMgKiAxMiwgIWJpZ0VuZCk7IC8vIGVhY2ggZW50cnkgaXMgMTIgYnl0ZXMgbG9uZ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRUaHVtYm5haWxJbWFnZShkYXRhVmlldywgdGlmZlN0YXJ0LCBmaXJzdElGRE9mZnNldCwgYmlnRW5kKXtcbiAgICAgICAgLy8gZ2V0IHRoZSBJRkQxIG9mZnNldFxuICAgICAgICB2YXIgSUZEMU9mZnNldFBvaW50ZXIgPSBnZXROZXh0SUZET2Zmc2V0KGRhdGFWaWV3LCB0aWZmU3RhcnQrZmlyc3RJRkRPZmZzZXQsIGJpZ0VuZCk7XG5cbiAgICAgICAgaWYgKCFJRkQxT2Zmc2V0UG9pbnRlcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJyoqKioqKioqIElGRDFPZmZzZXQgaXMgZW1wdHksIGltYWdlIHRodW1iIG5vdCBmb3VuZCAqKioqKioqKicpO1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKElGRDFPZmZzZXRQb2ludGVyID4gZGF0YVZpZXcuYnl0ZUxlbmd0aCkgeyAvLyB0aGlzIHNob3VsZCBub3QgaGFwcGVuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnKioqKioqKiogSUZEMU9mZnNldCBpcyBvdXRzaWRlIHRoZSBib3VuZHMgb2YgdGhlIERhdGFWaWV3ICoqKioqKioqJyk7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJyoqKioqKiogIHRodW1ibmFpbCBJRkQgb2Zmc2V0IChJRkQxKSBpczogJXMnLCBJRkQxT2Zmc2V0UG9pbnRlcik7XG5cbiAgICAgICAgdmFyIHRodW1iVGFncyA9IHJlYWRUYWdzKGRhdGFWaWV3LCB0aWZmU3RhcnQsIHRpZmZTdGFydCArIElGRDFPZmZzZXRQb2ludGVyLCBJRkQxVGFncywgYmlnRW5kKVxuXG4gICAgICAgIC8vIEVYSUYgMi4zIHNwZWNpZmljYXRpb24gZm9yIEpQRUcgZm9ybWF0IHRodW1ibmFpbFxuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBvZiBDb21wcmVzc2lvbigweDAxMDMpIFRhZyBpbiBJRkQxIGlzICc2JywgdGh1bWJuYWlsIGltYWdlIGZvcm1hdCBpcyBKUEVHLlxuICAgICAgICAvLyBNb3N0IG9mIEV4aWYgaW1hZ2UgdXNlcyBKUEVHIGZvcm1hdCBmb3IgdGh1bWJuYWlsLiBJbiB0aGF0IGNhc2UsIHlvdSBjYW4gZ2V0IG9mZnNldCBvZiB0aHVtYm5haWxcbiAgICAgICAgLy8gYnkgSnBlZ0lGT2Zmc2V0KDB4MDIwMSkgVGFnIGluIElGRDEsIHNpemUgb2YgdGh1bWJuYWlsIGJ5IEpwZWdJRkJ5dGVDb3VudCgweDAyMDIpIFRhZy5cbiAgICAgICAgLy8gRGF0YSBmb3JtYXQgaXMgb3JkaW5hcnkgSlBFRyBmb3JtYXQsIHN0YXJ0cyBmcm9tIDB4RkZEOCBhbmQgZW5kcyBieSAweEZGRDkuIEl0IHNlZW1zIHRoYXRcbiAgICAgICAgLy8gSlBFRyBmb3JtYXQgYW5kIDE2MHgxMjBwaXhlbHMgb2Ygc2l6ZSBhcmUgcmVjb21tZW5kZWQgdGh1bWJuYWlsIGZvcm1hdCBmb3IgRXhpZjIuMSBvciBsYXRlci5cblxuICAgICAgICBpZiAodGh1bWJUYWdzWydDb21wcmVzc2lvbiddKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVGh1bWJuYWlsIGltYWdlIGZvdW5kIScpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRodW1iVGFnc1snQ29tcHJlc3Npb24nXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1RodW1ibmFpbCBpbWFnZSBmb3JtYXQgaXMgSlBFRycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGh1bWJUYWdzLkpwZWdJRk9mZnNldCAmJiB0aHVtYlRhZ3MuSnBlZ0lGQnl0ZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4dHJhY3QgdGhlIHRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRPZmZzZXQgPSB0aWZmU3RhcnQgKyB0aHVtYlRhZ3MuSnBlZ0lGT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRMZW5ndGggPSB0aHVtYlRhZ3MuSnBlZ0lGQnl0ZUNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJUYWdzWydibG9iJ10gPSBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoZGF0YVZpZXcuYnVmZmVyLCB0T2Zmc2V0LCB0TGVuZ3RoKV0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRodW1ibmFpbCBpbWFnZSBmb3JtYXQgaXMgVElGRiwgd2hpY2ggaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmtub3duIHRodW1ibmFpbCBpbWFnZSBmb3JtYXQgJyVzJ1wiLCB0aHVtYlRhZ3NbJ0NvbXByZXNzaW9uJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRodW1iVGFnc1snUGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbiddID09IDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGh1bWJuYWlsIGltYWdlIGZvcm1hdCBpcyBSR0IsIHdoaWNoIGlzIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRodW1iVGFncztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdHJpbmdGcm9tREIoYnVmZmVyLCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBvdXRzdHIgPSBcIlwiO1xuICAgICAgICBmb3IgKG4gPSBzdGFydDsgbiA8IHN0YXJ0K2xlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBvdXRzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZmZXIuZ2V0VWludDgobikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRzdHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZEVYSUZEYXRhKGZpbGUsIHN0YXJ0KSB7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tREIoZmlsZSwgc3RhcnQsIDQpICE9IFwiRXhpZlwiKSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IHZhbGlkIEVYSUYgZGF0YSEgXCIgKyBnZXRTdHJpbmdGcm9tREIoZmlsZSwgc3RhcnQsIDQpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiaWdFbmQsXG4gICAgICAgICAgICB0YWdzLCB0YWcsXG4gICAgICAgICAgICBleGlmRGF0YSwgZ3BzRGF0YSxcbiAgICAgICAgICAgIHRpZmZPZmZzZXQgPSBzdGFydCArIDY7XG5cbiAgICAgICAgLy8gdGVzdCBmb3IgVElGRiB2YWxpZGl0eSBhbmQgZW5kaWFubmVzc1xuICAgICAgICBpZiAoZmlsZS5nZXRVaW50MTYodGlmZk9mZnNldCkgPT0gMHg0OTQ5KSB7XG4gICAgICAgICAgICBiaWdFbmQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmdldFVpbnQxNih0aWZmT2Zmc2V0KSA9PSAweDRENEQpIHtcbiAgICAgICAgICAgIGJpZ0VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKG5vIDB4NDk0OSBvciAweDRENEQpXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUuZ2V0VWludDE2KHRpZmZPZmZzZXQrMiwgIWJpZ0VuZCkgIT0gMHgwMDJBKSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKG5vIDB4MDAyQSlcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RJRkRPZmZzZXQgPSBmaWxlLmdldFVpbnQzMih0aWZmT2Zmc2V0KzQsICFiaWdFbmQpO1xuXG4gICAgICAgIGlmIChmaXJzdElGRE9mZnNldCA8IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAoRmlyc3Qgb2Zmc2V0IGxlc3MgdGhhbiA4KVwiLCBmaWxlLmdldFVpbnQzMih0aWZmT2Zmc2V0KzQsICFiaWdFbmQpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhZ3MgPSByZWFkVGFncyhmaWxlLCB0aWZmT2Zmc2V0LCB0aWZmT2Zmc2V0ICsgZmlyc3RJRkRPZmZzZXQsIFRpZmZUYWdzLCBiaWdFbmQpO1xuXG4gICAgICAgIGlmICh0YWdzLkV4aWZJRkRQb2ludGVyKSB7XG4gICAgICAgICAgICBleGlmRGF0YSA9IHJlYWRUYWdzKGZpbGUsIHRpZmZPZmZzZXQsIHRpZmZPZmZzZXQgKyB0YWdzLkV4aWZJRkRQb2ludGVyLCBFeGlmVGFncywgYmlnRW5kKTtcbiAgICAgICAgICAgIGZvciAodGFnIGluIGV4aWZEYXRhKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkxpZ2h0U291cmNlXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRmxhc2hcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNZXRlcmluZ01vZGVcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFeHBvc3VyZVByb2dyYW1cIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTZW5zaW5nTWV0aG9kXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2NlbmVDYXB0dXJlVHlwZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNjZW5lVHlwZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkN1c3RvbVJlbmRlcmVkXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiV2hpdGVCYWxhbmNlXCIgOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR2FpbkNvbnRyb2xcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDb250cmFzdFwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNhdHVyYXRpb25cIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTaGFycG5lc3NcIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTdWJqZWN0RGlzdGFuY2VSYW5nZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkZpbGVTb3VyY2VcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlmRGF0YVt0YWddID0gU3RyaW5nVmFsdWVzW3RhZ11bZXhpZkRhdGFbdGFnXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRXhpZlZlcnNpb25cIiA6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGbGFzaHBpeFZlcnNpb25cIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlmRGF0YVt0YWddID0gU3RyaW5nLmZyb21DaGFyQ29kZShleGlmRGF0YVt0YWddWzBdLCBleGlmRGF0YVt0YWddWzFdLCBleGlmRGF0YVt0YWddWzJdLCBleGlmRGF0YVt0YWddWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDb21wb25lbnRzQ29uZmlndXJhdGlvblwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aWZEYXRhW3RhZ10gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1ZhbHVlcy5Db21wb25lbnRzW2V4aWZEYXRhW3RhZ11bMF1dICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmdWYWx1ZXMuQ29tcG9uZW50c1tleGlmRGF0YVt0YWddWzFdXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nVmFsdWVzLkNvbXBvbmVudHNbZXhpZkRhdGFbdGFnXVsyXV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1ZhbHVlcy5Db21wb25lbnRzW2V4aWZEYXRhW3RhZ11bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ3NbdGFnXSA9IGV4aWZEYXRhW3RhZ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFncy5HUFNJbmZvSUZEUG9pbnRlcikge1xuICAgICAgICAgICAgZ3BzRGF0YSA9IHJlYWRUYWdzKGZpbGUsIHRpZmZPZmZzZXQsIHRpZmZPZmZzZXQgKyB0YWdzLkdQU0luZm9JRkRQb2ludGVyLCBHUFNUYWdzLCBiaWdFbmQpO1xuICAgICAgICAgICAgZm9yICh0YWcgaW4gZ3BzRGF0YSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJHUFNWZXJzaW9uSURcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBncHNEYXRhW3RhZ10gPSBncHNEYXRhW3RhZ11bMF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLlwiICsgZ3BzRGF0YVt0YWddWzFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5cIiArIGdwc0RhdGFbdGFnXVsyXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuXCIgKyBncHNEYXRhW3RhZ11bM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFnc1t0YWddID0gZ3BzRGF0YVt0YWddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXh0cmFjdCB0aHVtYm5haWxcbiAgICAgICAgdGFnc1sndGh1bWJuYWlsJ10gPSByZWFkVGh1bWJuYWlsSW1hZ2UoZmlsZSwgdGlmZk9mZnNldCwgZmlyc3RJRkRPZmZzZXQsIGJpZ0VuZCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfVxuXG4gICBmdW5jdGlvbiBmaW5kWE1QaW5KUEVHKGZpbGUpIHtcblxuICAgICAgICBpZiAoISgnRE9NUGFyc2VyJyBpbiBzZWxmKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdYTUwgcGFyc2luZyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgRE9NUGFyc2VyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGZpbGUpO1xuXG4gICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coXCJHb3QgZmlsZSBvZiBsZW5ndGggXCIgKyBmaWxlLmJ5dGVMZW5ndGgpO1xuICAgICAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQ4KDApICE9IDB4RkYpIHx8IChkYXRhVmlldy5nZXRVaW50OCgxKSAhPSAweEQ4KSkge1xuICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKFwiTm90IGEgdmFsaWQgSlBFR1wiKTtcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSB2YWxpZCBqcGVnXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gMixcbiAgICAgICAgICAgIGxlbmd0aCA9IGZpbGUuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIGRvbSA9IG5ldyBET01QYXJzZXIoKTtcblxuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgKGxlbmd0aC00KSkge1xuICAgICAgICAgICAgaWYgKGdldFN0cmluZ0Zyb21EQihkYXRhVmlldywgb2Zmc2V0LCA0KSA9PSBcImh0dHBcIikge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydE9mZnNldCA9IG9mZnNldCAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25MZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0IC0gMikgLSAxO1xuICAgICAgICAgICAgICAgIHZhciB4bXBTdHJpbmcgPSBnZXRTdHJpbmdGcm9tREIoZGF0YVZpZXcsIHN0YXJ0T2Zmc2V0LCBzZWN0aW9uTGVuZ3RoKVxuICAgICAgICAgICAgICAgIHZhciB4bXBFbmRJbmRleCA9IHhtcFN0cmluZy5pbmRleE9mKCd4bXBtZXRhPicpICsgODtcbiAgICAgICAgICAgICAgICB4bXBTdHJpbmcgPSB4bXBTdHJpbmcuc3Vic3RyaW5nKCB4bXBTdHJpbmcuaW5kZXhPZiggJzx4OnhtcG1ldGEnICksIHhtcEVuZEluZGV4ICk7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZlhtcCA9IHhtcFN0cmluZy5pbmRleE9mKCd4OnhtcG1ldGEnKSArIDEwXG4gICAgICAgICAgICAgICAgLy9NYW55IGN1c3RvbSB3cml0dGVuIHByb2dyYW1zIGVtYmVkIHhtcC94bWwgd2l0aG91dCBhbnkgbmFtZXNwYWNlLiBGb2xsb3dpbmcgYXJlIHNvbWUgb2YgdGhlbS5cbiAgICAgICAgICAgICAgICAvL1dpdGhvdXQgdGhlc2UgbmFtZXNwYWNlcywgWE1MIGlzIHRob3VnaHQgdG8gYmUgaW52YWxpZCBieSBwYXJzZXJzXG4gICAgICAgICAgICAgICAgeG1wU3RyaW5nID0geG1wU3RyaW5nLnNsaWNlKDAsIGluZGV4T2ZYbXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6SXB0YzR4bXBDb3JlPVwiaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zL1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczp0aWZmPVwiaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC9cIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6cGx1cz1cImh0dHA6Ly9zY2hlbWFzLmFuZHJvaWQuY29tL2Fway9saWIvY29tLmdvb2dsZS5hbmRyb2lkLmdtcy5wbHVzXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOmV4dD1cImh0dHA6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL3hzbHRFeHRlbnNpb24vMS4wXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgJ3htbG5zOmV4aWY9XCJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wL1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpzdEV2dD1cImh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50I1wiICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICd4bWxuczpzdFJlZj1cImh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiNcIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6Y3JzPVwiaHR0cDovL25zLmFkb2JlLmNvbS9jYW1lcmEtcmF3LXNldHRpbmdzLzEuMC9cIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6eGFwR0ltZz1cImh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9nL2ltZy9cIiAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAneG1sbnM6SXB0YzR4bXBFeHQ9XCJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvXCIgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgeG1wU3RyaW5nLnNsaWNlKGluZGV4T2ZYbXApXG5cbiAgICAgICAgICAgICAgICB2YXIgZG9tRG9jdW1lbnQgPSBkb20ucGFyc2VGcm9tU3RyaW5nKCB4bXBTdHJpbmcsICd0ZXh0L3htbCcgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geG1sMk9iamVjdChkb21Eb2N1bWVudCk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB4bWwyanNvbih4bWwpIHtcbiAgICAgICAgdmFyIGpzb24gPSB7fTtcbiAgICAgIFxuICAgICAgICBpZiAoeG1sLm5vZGVUeXBlID09IDEpIHsgLy8gZWxlbWVudCBub2RlXG4gICAgICAgICAgaWYgKHhtbC5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGpzb25bJ0BhdHRyaWJ1dGVzJ10gPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgeG1sLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XG4gICAgICAgICAgICAgIGpzb25bJ0BhdHRyaWJ1dGVzJ11bYXR0cmlidXRlLm5vZGVOYW1lXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHhtbC5ub2RlVHlwZSA9PSAzKSB7IC8vIHRleHQgbm9kZVxuICAgICAgICAgIHJldHVybiB4bWwubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gZGVhbCB3aXRoIGNoaWxkcmVuXG4gICAgICAgIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHhtbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB4bWwuY2hpbGROb2Rlcy5pdGVtKGkpO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gY2hpbGQubm9kZU5hbWU7XG4gICAgICAgICAgICBpZiAoanNvbltub2RlTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBqc29uW25vZGVOYW1lXSA9IHhtbDJqc29uKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChqc29uW25vZGVOYW1lXS5wdXNoID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkID0ganNvbltub2RlTmFtZV07XG4gICAgICAgICAgICAgICAganNvbltub2RlTmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICBqc29uW25vZGVOYW1lXS5wdXNoKG9sZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAganNvbltub2RlTmFtZV0ucHVzaCh4bWwyanNvbihjaGlsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24geG1sMk9iamVjdCh4bWwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgICAgIGlmICh4bWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhtbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geG1sLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBpdGVtLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUF0dCA9IGF0dHJpYnV0ZXNbaWR4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFLZXkgPSBpdGVtQXR0Lm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVZhbHVlID0gaXRlbUF0dC5ub2RlVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZGF0YUtleV0gPSBkYXRhVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gaXRlbS5ub2RlTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZV0pID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSB4bWwyanNvbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqW25vZGVOYW1lXS5wdXNoKSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGQgPSBvYmpbbm9kZU5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lXS5wdXNoKG9sZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvYmpbbm9kZU5hbWVdLnB1c2goeG1sMmpzb24oaXRlbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqID0geG1sLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIEVYSUYuZW5hYmxlWG1wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEVYSUYuaXNYbXBFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBFWElGLmRpc2FibGVYbXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgRVhJRi5pc1htcEVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBFWElGLmdldERhdGEgPSBmdW5jdGlvbihpbWcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICgoKHNlbGYuSW1hZ2UgJiYgaW1nIGluc3RhbmNlb2Ygc2VsZi5JbWFnZSlcbiAgICAgICAgICAgIHx8IChzZWxmLkhUTUxJbWFnZUVsZW1lbnQgJiYgaW1nIGluc3RhbmNlb2Ygc2VsZi5IVE1MSW1hZ2VFbGVtZW50KSlcbiAgICAgICAgICAgICYmICFpbWcuY29tcGxldGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFpbWFnZUhhc0RhdGEoaW1nKSkge1xuICAgICAgICAgICAgZ2V0SW1hZ2VEYXRhKGltZywgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChpbWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIEVYSUYuZ2V0VGFnID0gZnVuY3Rpb24oaW1nLCB0YWcpIHtcbiAgICAgICAgaWYgKCFpbWFnZUhhc0RhdGEoaW1nKSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gaW1nLmV4aWZkYXRhW3RhZ107XG4gICAgfVxuICAgIFxuICAgIEVYSUYuZ2V0SXB0Y1RhZyA9IGZ1bmN0aW9uKGltZywgdGFnKSB7XG4gICAgICAgIGlmICghaW1hZ2VIYXNEYXRhKGltZykpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIGltZy5pcHRjZGF0YVt0YWddO1xuICAgIH1cblxuICAgIEVYSUYuZ2V0QWxsVGFncyA9IGZ1bmN0aW9uKGltZykge1xuICAgICAgICBpZiAoIWltYWdlSGFzRGF0YShpbWcpKSByZXR1cm4ge307XG4gICAgICAgIHZhciBhLFxuICAgICAgICAgICAgZGF0YSA9IGltZy5leGlmZGF0YSxcbiAgICAgICAgICAgIHRhZ3MgPSB7fTtcbiAgICAgICAgZm9yIChhIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICAgICAgdGFnc1thXSA9IGRhdGFbYV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfVxuICAgIFxuICAgIEVYSUYuZ2V0QWxsSXB0Y1RhZ3MgPSBmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgaWYgKCFpbWFnZUhhc0RhdGEoaW1nKSkgcmV0dXJuIHt9O1xuICAgICAgICB2YXIgYSxcbiAgICAgICAgICAgIGRhdGEgPSBpbWcuaXB0Y2RhdGEsXG4gICAgICAgICAgICB0YWdzID0ge307XG4gICAgICAgIGZvciAoYSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShhKSkge1xuICAgICAgICAgICAgICAgIHRhZ3NbYV0gPSBkYXRhW2FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cblxuICAgIEVYSUYucHJldHR5ID0gZnVuY3Rpb24oaW1nKSB7XG4gICAgICAgIGlmICghaW1hZ2VIYXNEYXRhKGltZykpIHJldHVybiBcIlwiO1xuICAgICAgICB2YXIgYSxcbiAgICAgICAgICAgIGRhdGEgPSBpbWcuZXhpZmRhdGEsXG4gICAgICAgICAgICBzdHJQcmV0dHkgPSBcIlwiO1xuICAgICAgICBmb3IgKGEgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbYV0gPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVthXSBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyUHJldHR5ICs9IGEgKyBcIiA6IFwiICsgZGF0YVthXSArIFwiIFtcIiArIGRhdGFbYV0ubnVtZXJhdG9yICsgXCIvXCIgKyBkYXRhW2FdLmRlbm9taW5hdG9yICsgXCJdXFxyXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJQcmV0dHkgKz0gYSArIFwiIDogW1wiICsgZGF0YVthXS5sZW5ndGggKyBcIiB2YWx1ZXNdXFxyXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJQcmV0dHkgKz0gYSArIFwiIDogXCIgKyBkYXRhW2FdICsgXCJcXHJcXG5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0clByZXR0eTtcbiAgICB9XG5cbiAgICBFWElGLnJlYWRGcm9tQmluYXJ5RmlsZSA9IGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRFWElGaW5KUEVHKGZpbGUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdleGlmLWpzJywgW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIEVYSUY7XG4gICAgICAgIH0pO1xuICAgIH1cbn0uY2FsbCh0aGlzKSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRCYXNlNjRTdHJpbmdzID0gdm9pZCAwO1xuY29uc3QgZ2V0SW1hZ2VzXzEgPSByZXF1aXJlKFwiLi91dGlscy9nZXRJbWFnZXNcIik7XG5jb25zdCBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi9vcHRpb25zXCIpO1xuY29uc3QgZ2V0QnJvd3Nlck9yaWVudGF0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlscy9nZXRCcm93c2VyT3JpZW50YXRpb25cIik7XG5leHBvcnRzLmdldEJhc2U2NFN0cmluZ3MgPSBhc3luYyAoZmlsZXMsIHsgbWF4U2l6ZSA9IG9wdGlvbnNfMS5kZWZhdWx0T3B0aW9ucy5tYXhTaXplLCB0eXBlID0gb3B0aW9uc18xLmRlZmF1bHRPcHRpb25zLnR5cGUsIH0gPSB7fSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW52YXMgY2FuIG5vdCBjcmVhdGVkJyk7XG4gICAgfVxuICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IGdldEltYWdlc18xLmdldEltYWdlcyhmaWxlcyk7XG4gICAgY29uc3QgaGFzQnJvd3Nlck9yaWVudGF0aW9uID0gYXdhaXQgZ2V0QnJvd3Nlck9yaWVudGF0aW9uXzEuZ2V0QnJvd3Nlck9yaWVudGF0aW9uKCk7XG4gICAgaWYgKGhhc0Jyb3dzZXJPcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBiYXNlNjRzID0gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZ2V0SW1hZ2VzXzEuZ2V0U2l6ZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCBtYXhTaXplKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1weGApO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmFzZTY0cztcbiAgICB9XG4gICAgY29uc3QgYmFzZTY0cyA9IGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0SW1hZ2VzXzEuZ2V0T3JpZW50YXRpb24oaW1hZ2UpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGdldEltYWdlc18xLmdldFNpemUob3JpZW50YXRpb24gPiA0ID8gaW1hZ2UuaGVpZ2h0IDogaW1hZ2Uud2lkdGgsIG9yaWVudGF0aW9uID4gNCA/IGltYWdlLndpZHRoIDogaW1hZ2UuaGVpZ2h0LCBtYXhTaXplKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKTtcbiAgICAgICAgY29uc3QgeyB0cmFuc2xhdGUsIHNjYWxlLCByb3RhdGUgfSA9IGdldEltYWdlc18xLmdldENhbnZhc09wdGlvbnMod2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSh0cmFuc2xhdGUueCwgdHJhbnNsYXRlLnkpO1xuICAgICAgICBjb250ZXh0LnNjYWxlKHNjYWxlLngsIHNjYWxlLnkpO1xuICAgICAgICBjb250ZXh0LnJvdGF0ZShyb3RhdGUuYW5nbGUpO1xuICAgICAgICAvLyBleGlmIG9yaWVudGF0aW9uIHZhbHVlcyA+IDQgY29ycmVzcG9uZCB0byBwb3J0cmFpdCBvcmllbnRhdGlvbi5cbiAgICAgICAgLy8gd2lkdGggYW5kIGhlaWdodCBwYXJhbWV0ZXJzIG11c3QgYmUgc3dhcHBlZCBmb3IgbGFuZHNjYXBlIHRvIGVuc3VyZSBjb3JyZWN0IGltYWdlIGRpc3BsYXlcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gNCkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBiYXNlNjRzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2V0QmFzZTY0U3RyaW5nc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1heFNpemU6IDcyMCxcbiAgICB0eXBlOiAnaW1hZ2UvanBlZycsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGFua3MgSmF2YVNjcmlwdC1Mb2FkLUltYWdlIHJlcG9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTG9hZC1JbWFnZS9ibG9iLzFlNGRmNzA3ODIxYTBhZmNjMTFlYTA3MjBlZTQwM2I4NzU5ZjM4ODEvanMvbG9hZC1pbWFnZS1vcmllbnRhdGlvbi5qcyNMMzctTDUzXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEJyb3dzZXJPcmllbnRhdGlvbiA9IHZvaWQgMDtcbmNvbnN0IHJlYWRJbWFnZV8xID0gcmVxdWlyZShcIi4vcmVhZEltYWdlXCIpO1xuYXN5bmMgZnVuY3Rpb24gZ2V0QnJvd3Nlck9yaWVudGF0aW9uKCkge1xuICAgIC8vIGJsYWNrIDJ4MSBKUEVHLCB3aXRoIHRoZSBmb2xsb3dpbmcgbWV0YSBpbmZvcm1hdGlvbiBzZXQ6XG4gICAgLy8gRVhJRiBPcmllbnRhdGlvbjogNiAoUm90YXRlZCA5MMKwIENDVylcbiAgICBjb25zdCB0ZXN0SW1hZ2VVUkwgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBaVJYaHBaZ0FBVFUwQUtnQUFBQWdBQVFFU0FBTUFBQUFCQUFZQUFBQScgK1xuICAgICAgICAnQUFBRC8yd0NFQUFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQScgK1xuICAgICAgICAnUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRScgK1xuICAgICAgICAnQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBZi9BQUJFSUFBRUFBZ01CRVFBQ0VRRURFUUgveCcgK1xuICAgICAgICAnQUJLQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFMRUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVFFQUFBQUFBQUFBQUFBQUFBQScgK1xuICAgICAgICAnQUFBQUFFUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BREFNQkFBSVJBeEVBUHdBLzhILy8yUT09JztcbiAgICBjb25zdCBpbWcgPSBhd2FpdCByZWFkSW1hZ2VfMS5yZWFkSW1hZ2UodGVzdEltYWdlVVJMKTtcbiAgICAvLyBDaGVjayBpZiBicm93c2VyIHN1cHBvcnRzIGF1dG9tYXRpYyBpbWFnZSBvcmllbnRhdGlvbjpcbiAgICByZXR1cm4gaW1nLndpZHRoID09PSAxICYmIGltZy5oZWlnaHQgPT09IDI7XG59XG5leHBvcnRzLmdldEJyb3dzZXJPcmllbnRhdGlvbiA9IGdldEJyb3dzZXJPcmllbnRhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRDYW52YXNPcHRpb25zID0gZXhwb3J0cy5nZXRPcmllbnRhdGlvbiA9IGV4cG9ydHMuZ2V0U2l6ZSA9IGV4cG9ydHMuZ2V0SW1hZ2VzID0gdm9pZCAwO1xuY29uc3QgRVhJRiA9IHJlcXVpcmUoXCJleGlmLWpzXCIpO1xuY29uc3QgcmVhZEZpbGVfMSA9IHJlcXVpcmUoXCIuL3JlYWRGaWxlXCIpO1xuY29uc3QgcmVhZEltYWdlXzEgPSByZXF1aXJlKFwiLi9yZWFkSW1hZ2VcIik7XG5jb25zdCBvcHRpb25zXzEgPSByZXF1aXJlKFwiLi4vb3B0aW9uc1wiKTtcbmFzeW5jIGZ1bmN0aW9uIGdldEltYWdlcyhmaWxlcykge1xuICAgIGNvbnN0IGRhdGFzID0gYXdhaXQgcmVhZEZpbGVfMS5nZXREYXRhRnJvbVJlYWRGaWxlKGZpbGVzKTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YXMubWFwKChpdGVtKSA9PiByZWFkSW1hZ2VfMS5yZWFkSW1hZ2UoaXRlbSkpKTtcbn1cbmV4cG9ydHMuZ2V0SW1hZ2VzID0gZ2V0SW1hZ2VzO1xuZnVuY3Rpb24gZ2V0U2l6ZSh3aWR0aCwgaGVpZ2h0LCBtYXhTaXplID0gb3B0aW9uc18xLmRlZmF1bHRPcHRpb25zLm1heFNpemUpIHtcbiAgICBjb25zdCBwYXJzZVdpZHRoID0gbWF4U2l6ZSA8IHdpZHRoID8gbWF4U2l6ZSA6IHdpZHRoO1xuICAgIGNvbnN0IHBhcnNlSGVpZ2h0ID0gbWF4U2l6ZSA8IGhlaWdodCA/IG1heFNpemUgOiBoZWlnaHQ7XG4gICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogcGFyc2VXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICogKHBhcnNlV2lkdGggLyB3aWR0aCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChoZWlnaHQgPiB3aWR0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoICogKHBhcnNlSGVpZ2h0IC8gaGVpZ2h0KSxcbiAgICAgICAgICAgIGhlaWdodDogcGFyc2VIZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBwYXJzZVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBhcnNlSGVpZ2h0LFxuICAgIH07XG59XG5leHBvcnRzLmdldFNpemUgPSBnZXRTaXplO1xuZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oaW1nKSB7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gMTtcbiAgICAvLyBAdHMtaWdub3JlIG5vdCBzdHJpbmc6IGh0dHBzOi8vZ2l0aHViLmNvbS9leGlmLWpzL2V4aWYtanMvcHVsbC8xOThcbiAgICBFWElGLmdldERhdGEoaW1nLCAoKSA9PiB7XG4gICAgICAgIG9yaWVudGF0aW9uID0gRVhJRi5nZXRUYWcoaW1nLCAnT3JpZW50YXRpb24nKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3JpZW50YXRpb247XG59XG5leHBvcnRzLmdldE9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb247XG5mdW5jdGlvbiBnZXRDYW52YXNPcHRpb25zKHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICB9LFxuICAgICAgICByb3RhdGU6IHtcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIGZsaXBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy50cmFuc2xhdGUsXG4gICAgICAgICAgICAgICAgICAgIHg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIC8vIDE4MMKwIHJvdGF0ZSBsZWZ0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IE1hdGguUEksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsIGZsaXBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy50cmFuc2xhdGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuc2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAvLyB2ZXJ0aWNhbCBmbGlwICsgOTAgcm90YXRlIHJpZ2h0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6ICg5MCAqIE1hdGguUEkpIC8gMTgwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAvLyA5MMKwIHJvdGF0ZSByaWdodFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeDogd2lkdGgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6ICg5MCAqIE1hdGguUEkpIC8gMTgwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAvLyBob3Jpem9udGFsIGZsaXAgKyA5MCByb3RhdGUgcmlnaHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBhbmdsZTogKDkwICogTWF0aC5QSSkgLyAxODAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICB5OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgLy8gOTDCsCByb3RhdGUgbGVmdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLnRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgeTogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcm90YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAtKDkwICogTWF0aC5QSSkgLyAxODAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5leHBvcnRzLmdldENhbnZhc09wdGlvbnMgPSBnZXRDYW52YXNPcHRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldERhdGFGcm9tUmVhZEZpbGUgPSBleHBvcnRzLnJlYWRGaWxlID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVhZEZpbGUoZmlsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4gcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRGaWxlID0gcmVhZEZpbGU7XG5hc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbVJlYWRGaWxlKGZpbGVzKSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oZmlsZXMpLm1hcCgoZmlsZSkgPT4gcmVhZEZpbGUoZmlsZSkpKTtcbn1cbmV4cG9ydHMuZ2V0RGF0YUZyb21SZWFkRmlsZSA9IGdldERhdGFGcm9tUmVhZEZpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVhZEltYWdlID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVhZEltYWdlKHNyYykge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkSW1hZ2UgPSByZWFkSW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9