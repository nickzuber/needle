{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ 
        "src/myclass-main.cpp"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}