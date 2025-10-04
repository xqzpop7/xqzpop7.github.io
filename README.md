# xqzpop7.github.io

Repository for my website.

## Allow local network testing

```bash
sudo iptables -A INPUT -p tcp --dport 5500 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT && sudo iptables -A OUTPUT -p tcp --sport 5500 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

_This assumes Live Server is using port 5500. Resets on reboot._

## TODO

- Style the website in an [old newspaper look](https://www.schemecolor.com/old-newspaper.php).
- Start work on contacts page.
