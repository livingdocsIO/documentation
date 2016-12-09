#!/usr/local/Cellar/bash/4.3.42/bin/bash
# Requires bash 4
# brew update && brew install bash
# /usr/local/bin/bash create_labels.sh

###
# Label definitions
###

declare -A LABELS

if [ "$repo" == "livingdocs-planning" ]; then
  LABELS["Urgent"]="e11d21"
  LABELS["Bug"]="b6171b"
  LABELS["Leftover"]="bfdadc"
  LABELS["Preparation"]="fbca04"
  LABELS["Status?"]="f60205"
  LABELS["Discussion"]="5319e7"
  LABELS["Blocked"]="fbe489"

  # Projects
  LABELS["in/Editor"]="433945"
  LABELS["in/Server"]="433945"
  LABELS["in/Framework"]="433945"
  LABELS["in/Other"]="433945"

  # Customers
  LABELS["for/NZZ"]="3e78bd"
  LABELS["for/Bluewin"]="061e5c"
  LABELS["for/Livingdocs"]="29b96f"
else
  LABELS["to/Review"]="009800"
  LABELS["to/Test"]="00ce00"
fi


###
# Get a token from Github
###
if [ ! -f ".create_labels_token" ]; then
  read -p "Please enter your Github username: " user
  read -p "Please enter your 6 digit two-factor-authentication code: " otp_code

  curl -u "$user" -H "X-Github-OTP: $otp_code" -d '{"scopes":["repo", "public_repo"], "note":"Creating Labels"}' "https://api.github.com/authorizations" | jq -r '.token' > .create_labels_token
fi

TOKEN=$(cat .create_labels_token)

#read -p "Who owns the repo you want labels on?: " owner
owner="upfrontIO"
read -p "What repo do you want labels on?: " repo

for K in "${!LABELS[@]}"; do
  CURL_OUTPUT=$(curl -s -H "Authorization: token $TOKEN" -X POST "https://api.github.com/repos/$owner/$repo/labels" -d "{\"name\":\"$K\", \"color\":\"${LABELS[$K]}\"}")
  HAS_ERROR=$(echo "$CURL_OUTPUT" | jq -r '.errors')

  if [ ! -z "$HAS_ERROR" ]; then
    ERROR=$(echo "$CURL_OUTPUT" | jq -r '.errors[0].code')

    if [ "$ERROR" == "already_exists" ]; then
      # We update
      echo "'$K' already exists. Updating..."
      CURL_OUTPUT=$(curl -s -H "Authorization: token $TOKEN" -X PATCH "https://api.github.com/repos/$owner/$repo/labels/${K/ /%20}" -d "{\"name\":\"$K\", \"color\":\"${LABELS[$K]}\"}")
    elif [ -z "$ERROR" ]; then
      echo "Output from curl: "
      echo "$CURL_OUTPUT"
      echo "Exiting..."
      exit;
    fi
  else
    echo "Created '$K'."
  fi
done

echo "Check it out: https://github.com/$owner/$repo/labels"
