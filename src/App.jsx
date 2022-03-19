import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

const App = () => {


  useEffect(() => {
    const socket = io('ws://localhost:8888')

    socket.on('connnection', () => {
      console.log('connected to server');
    })


    socket.on('message', (message) => {
      console.log(message);
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

    socket.on('chat message', function (msg) {
      console.log(msg);
    });

  }, [])

  useEffect(() => {
    const apiKey = '5680edb4-e431-474b-a2f7-e79e511f8d57';
    const meetingId = "milkyway";
    const name = "Demo User";

    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,

      containerId: null,
      redirectOnLeave: "https://www.videosdk.live/",

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,

      recordingEnabled: true,
      recordingEnabledByDefault: false,
      // recordingWebhookUrl: "https://www.videosdk.live/callback",
      // recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path

      brandingEnabled: true,
      brandLogoURL: "https://picsum.photos/200",
      brandName: "Awesome startup",

      participantCanLeave: true, // if false, leave button won't be visible

      livestream: {
        layout: false
      },
      // livestream: {
      //   autoStart: true,
      //   outputs: [
      //     // {
      //     //   url: "rtmp://x.rtmp.youtube.com/live2",
      //     //   streamKey: "<STREAM KEY FROM YOUTUBE>",
      //     // },
      //   ],
      // },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        removeParticipant: true, // Remove other participant from meeting
        endMeeting: true, // End meeting for all participant
        drawOnWhiteboard: true, // Can Draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle recording
      },

      joinScreen: {
        visible: false, // Show the join screen ?
        title: "Daily scrum", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url

      },

      pin: {
        allowed: true, // participant can pin any participant in meeting
        layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },

      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: "Video SDK Live", // action button label
          href: "https://videosdk.live/", // action button href
        },
      },
    };
    console.log(config.joinScreen.meetingUrl);
    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return (<>
    <h2>Doctor</h2>

  </>
  )
}

export default App