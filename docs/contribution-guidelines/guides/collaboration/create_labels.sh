#!/usr/local/Cellar/bash/4.3.42/bin/bash
# Requires bash 4
# brew update && brew install bash
# /usr/local/bin/bash create_labels.sh

###
# Label definitions
###

declare -A LABELS

# Status
LABELS["Discussion"]="5319e7"
LABELS["To review"]="009800"
LABELS["To test"]="00ce00"
LABELS["Blocked"]="fbe489"
LABELS["In delay"]="fbca04"

# Reminders
LABELS["Urgent"]="e11d21"
LABELS["Bug"]="b6171b"
LABELS["Breaking change"]="00aebe"
LABELS["Greenkeeper"]="ededed"

# Customers
LABELS["NZZ"]="e77ee6"
LABELS["Bluewin"]="c384e7"


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
    elif ["$ERROR" -ne ""]; then
      echo "Output from curl: "
      echo "$CURL_OUTPUT"
      echo "Exiting..."
      exit;
    fi
  else
    echo "Created '$K'."
  fi
done
