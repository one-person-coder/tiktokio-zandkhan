export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  try {
    const requestUrl = new URL(request.url);
    const urlParam = requestUrl.searchParams.get("url");
    console.log("=== DEBUG TEST API ===");
    console.log("Full request URL:", request.url);
    console.log("URL parameter received:", urlParam);
    console.log("All parameters:", Array.from(requestUrl.searchParams.entries()));
    return new Response(JSON.stringify({
      success: true,
      receivedUrl: urlParam,
      fullRequestUrl: request.url,
      allParams: Array.from(requestUrl.searchParams.entries()),
      message: urlParam ? "URL parameter received successfully!" : "No URL parameter found"
    }), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: {
        "content-type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
