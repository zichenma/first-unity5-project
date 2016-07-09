function OnTriggerEnter (info : Collider){
    Destroy(gameObject);
    CoinSystem.coinscollect += 1;
    Debug.Log('enterd trigger : COIN');
}