import qs from "qs";

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
    const requestUrl = `${process.env.STRAPI_URL || 'http://localhost:1337'}/api${path}${queryString ? `?${queryString}` : ''}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));

    // Handle response
    if (!response.ok) {
      console.error("Strapi Error:", data.error);
      throw new Error(`Strapi API Error: ${data.error?.message || response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error("fetchAPI error:", error);
    throw new Error(`Please check if your Strapi server is running and you set all the required env variables`);
  }
}
