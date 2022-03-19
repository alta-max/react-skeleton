export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiN2U4ZGU0NS1iZWJlLTQ1Y2EtYmI1Mi1hZmRlYzllOTA3YmUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY0NzY4NDc0MCwiZXhwIjoxNjQ4Mjg5NTQwfQ.9EiD22LcUr8EsShob8FEq2X8kBhrIko2o6T-ustnomY";
// API call to create meeting
export const createMeeting = async ({ token }) => {
    const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
        method: "POST",
        headers: {
            authorization: `${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ region: "sg001" }),
    });

    const { meetingId } = await res.json();
    return meetingId;
};