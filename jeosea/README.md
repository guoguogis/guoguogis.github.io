configure
==========

##install
sudo apt-get install ruby rubygems

all theme packages in: https://github.com/jekyllbootstrap
local _includes/themes

switch theme
rake theme:switch name="the-program"

## configure
about post_list change _include/JB/posts_collate
frameout _include/theme/themename/default.html

## NOTE
1. please note the *** in blog.
2. reponame aborn.github.io
3. modify _include/JB/posts_collate for archive.html
4. add index.md in top


