export const APP_LIST = {
  'whatsapp': {pkgName: 'com.whatsapp', urlScheme: 'whatsapp', urlParams: 'app'}, // fa
  'facebook': {pkgName: 'com.facebook.katana', urlScheme: 'fb', urlParams: 'requests'}, // fa: facebook-official
  'facebook messenger': {pkgName: 'com.facebook.orca', urlScheme: 'fb-messenger', urlParams: 'user-thread/{user-id}'}, // fa: facebook
  'skype': {pkgName: 'com.skype.raider', urlScheme: 'skype', urlParams: 'echo123?call'}, // fa
  'wechat': {pkgName: 'com.tencent.mm', urlScheme: 'weixin', urlParams: 'dl/chat'}, // fa
  'snapchat': {pkgName: 'com.snapchat.android', urlScheme: 'snapchat', urlParams: '?u=foo'}, // fa
  'twitter': {pkgName: 'com.twitter.android', urlScheme: 'twitter', urlParams: 'messages'}, // fa
  'youtube': {pkgName: 'com.google.android.youtube', urlScheme: 'youtube', urlParams: 'watch?v=dQw4w9WgXcQ'}, // fa
  'netflix': {pkgName: 'com.netflix.mediaclient', urlScheme: 'nflx', urlParams: ''},
  'instagram': {pkgName: 'com.instagram.android', urlScheme: 'instagram', urlParams: 'app'}, // fa
  'spotify': {pkgName: 'com.spotify.music', urlScheme: 'spotify', urlParams: 'http://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI'}, // fa
  'slack': {pkgName: 'com.Slack', urlScheme: 'slack', urlParams: 'open'}, // fa
  'hipchat': {pkgName: 'com.hipchat', urlScheme: 'hipchat', urlParams: 'companyname/lobby'},
  'pinterest': {pkgName: 'com.pinterest', urlScheme: 'pinterest', urlParams: 'pin/285063851385287883/'}, // fa
  'uber': {pkgName: 'com.ubercab', urlScheme: 'uber', urlParams: ''},
  'amazon': {pkgName: 'com.amazon.mShop.android.shopping', urlScheme: 'amazon', urlParams: 'content/item?id=B007Q4OVHQ'}, // fa
  'soundcloud': {pkgName: 'com.soundcloud.android', urlScheme: 'soundcloud', urlParams: 'tracks/63085864'}, // fa
  'google maps': {pkgName: 'com.google.android.apps.maps', urlScheme: 'comgooglemaps', urlParams: '?center=40.765819,-73.975866&zoom=14&views=traffic'}, // fa: map-marker
  'chrome': {pkgName: 'com.android.chrome', urlScheme: 'googlechrome', urlParams: 'github.com'}, // fa
  'gmail': {pkgName: 'com.google.android.gm', urlScheme: 'googlegmail', urlParams: 'co?subject=foo&body=bar'}, // fa: envelope-open
  'google drive': {pkgName: 'com.google.android.apps.docs', urlScheme: 'googledrive', urlParams: ''}, // fa: database
  'dropbox': {pkgName: 'com.dropbox.android', urlScheme: 'xxx', urlParams: ''}, // fa
  'google hangouts': {pkgName: 'com.google.android.talk', urlScheme: 'com.google.hangouts', urlParams: ''}, // fa: phone
  'evernote': {pkgName: 'com.evernote', urlScheme: 'evernote', urlParams: 'root'},
  'threema': {pkgName: 'ch.threema.app', urlScheme: 'threema', urlParams: 'add?id=ECHOECHO'}, // fa: lock
  'vlc': {pkgName: 'org.videolan.vlc', urlScheme: 'vlc', urlParams: ''},
  'tumblr': {pkgName: 'com.tumblr', urlScheme: 'tumblr', urlParams: 'x-callback-url/dashboard'}, // fa
  'flickr': {pkgName: 'com.yahoo.mobile.client.android.flickr', urlScheme: 'flickr', urlParams: ''}, // fa
  'linkedin': {pkgName: 'com.linkedin.android', urlScheme: 'linkedin', urlParams: ''},
  'tinder': {pkgName: 'com.tinder', urlScheme: 'tinder', urlParams: ''},
  'globoplay': {pkgName: 'com.globo.globotv', urlScheme: 'globotv', urlParams: ''},
  'google': {pkgName: 'com.google.android.googlequicksearchbox', urlScheme: 'google', urlParams: ''},
  'bradesco': {pkgName: 'com.bradesco', urlScheme: 'bradesco', urlParams: ''},
  'itau': {pkgName: 'com.itau', urlScheme: 'itau', urlParams: ''},
  'bancoBrasil': {pkgName: 'br.com.bb.android', urlScheme: 'bancoBrasil', urlParams: ''},
  'caixa': {pkgName: 'br.com.gabba.Caixa', urlScheme: 'caixa', urlParams: ''},
  'santander': {pkgName: 'com.santander.app', urlScheme: 'santander', urlParams: ''},
  'next': {pkgName: 'br.com.bradesco.next', urlScheme: 'next', urlParams: ''},
  'inter': {pkgName: 'br.com.intermedium', urlScheme: 'inter', urlParams: ''},
  'neon': {pkgName: 'br.com.neon', urlScheme: 'neon', urlParams: ''},
  'nubank': {pkgName: 'com.nu.production', urlScheme: 'nubank', urlParams: ''},
  'tim': {pkgName: 'br.com.timbrasil.meutim', urlScheme: 'tim', urlParams: ''},
  'oi': {pkgName: 'br.com.mobicare.minhaoi', urlScheme: 'oi', urlParams: ''},
  'vivo': {pkgName: 'br.com.vivo', urlScheme: 'vivo', urlParams: ''},
  'creditas': {pkgName: 'br.com.creditas.mobile', urlScheme: 'creditas', urlParams: ''},
  'mutual': {pkgName: 'com.mutual.app', urlScheme: 'mutual', urlParams: ''},
  'bolsaFamilia': {pkgName: 'br.gov.caixa.bolsafamilia', urlScheme: 'bolsaFamilia', urlParams: ''},
  'caixaTrabalhador': {pkgName: 'br.gov.caixa.trabalhador', urlScheme: 'caixaTrabalhador', urlParams: ''},
  'jeitto': {pkgName: 'br.com.jeitto.meujeitto', urlScheme: 'jeitto', urlParams: ''},
  'noverde': {pkgName: 'br.com.noverde.noverde', urlScheme: 'noverde', urlParams: ''},
  'celcoin': {pkgName: 'com.usuario.celcoin', urlScheme: 'celcoin', urlParams: ''},
  'recargapay': {pkgName: 'com.recarga.recarga', urlScheme: 'recargapay', urlParams: ''},
  'mgrana': {pkgName: 'com.mgrana', urlScheme: 'mgrana', urlParams: ''},
  'picpay': {pkgName: 'com.picpay', urlScheme: 'picpay', urlParams: ''},
  'crefisa': {pkgName: 'com.netbank.crefisa', urlScheme: 'crefisa', urlParams: ''},
  'guiabolso': {pkgName: 'br.com.guiabolso', urlScheme: 'guiabolso', urlParams: ''},
  'interempresas': {pkgName: 'br.com.Inter.CDPro', urlScheme: 'interempresas', urlParams: ''},
  'bradescoexclusive': {pkgName: 'com.bradesco.exclusive', urlScheme: 'bradescoexclusive', urlParams: ''},
  'claro': {pkgName: 'com.nvt.cs', urlScheme: 'claro', urlParams: ''},
  'marisa': {pkgName: 'br.com.marisa.android', urlScheme: 'marisa', urlParams: ''},
  'casasbahia': {pkgName: 'com.novapontocom.casasbahia', urlScheme: 'casasbahia', urlParams: ''},
  'loterica': {pkgName: 'br.com.lftek.android.Loteria', urlScheme: 'loterica', urlParams: ''},
  'ubereats': {pkgName: 'com.ubercab.eats', urlScheme: 'ubereats', urlParams: ''},
  'rappi': {pkgName: 'com.grability.rappi', urlScheme: 'rappi', urlParams: ''},
  'foodora': {pkgName: 'de.foodora.android', urlScheme: 'foodora', urlParams: ''},
  'deliveroo': {pkgName: 'com.deliveroo.orderapp', urlScheme: 'deliveroo', urlParams: ''},
};