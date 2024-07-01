# Day 11: MERN Stack Training Diary

## HTTP HEADERS
- **Metadata of req-res Cycle**: HTTP headers provide essential metadata about the request and response, helping manage the flow of information between client and server.
- **Additional Info of Network Packets**: Headers carry additional information about network packets, such as content type, length, and encoding.

### Common Headers:
- **Content-Type**: Specifies the media type of the resource (e.g., `application/json` for JSON data).
- **Request Headers**: Include key-value pairs sent by the client to the server.
  - **Example**: `Authorization`, `User-Agent`
- **Response Headers**: Include key-value pairs sent by the server to the client.
  - **Example**: `Content-Length`, `Set-Cookie`

### Setting Custom Headers:
- **Example**:
  ```js
  res.setHeader("myName", "Simar");
  ```
- **Custom Header Naming**: Always prefix custom headers with `X-` to indicate they are not built-in headers.
  - **Example**: `X-myName`

### Examples of Built-in Headers:
- **Common Built-in Headers**:
  - `Content-Type`
  - `Content-Length`
  - `Authorization`
  - `User-Agent`
  - `Accept`

## How `app.use(express.urlencoded({extended: false}))` Works
- **Functionality**: Parses incoming requests with `x-www-form-urlencoded` payloads and populates the `req.body` object with the parsed data.
- **Content-Type**: Reads the `Content-Type` header to ensure it matches `application/x-www-form-urlencoded`.

## How `app.use(express.json({extended: false}))` Works
- **Functionality**: Parses incoming requests with JSON payloads and populates the `req.body` object with the parsed data.
- **Content-Type**: Reads the `Content-Type` header to ensure it matches `application/json`.

