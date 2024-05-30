var APP_DATA = {
  scenes: [
    {
      id: "0-tebing1",
      name: "tebing1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 864,
      initialViewParameters: {
        yaw: -3.086879975007264,
        pitch: 0.23464930125512318,
        fov: 1.2998306898911014,
      },
      linkHotspots: [
        {
          yaw: -0.23500993120840796,
          pitch: -0.044231074111788615,
          rotation: 6.283185307179586,
          target: "1-pantai",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-pantai",
      name: "pantai",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 864,
      initialViewParameters: {
        yaw: 2.6318451996378176,
        pitch: -0.017656750326498383,
        fov: 1.2998306898911014,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
  ],
  name: "VR-Alam",
  settings: {
    mouseViewMode: "qtvr",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
